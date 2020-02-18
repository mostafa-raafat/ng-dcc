import { loadModules } from "esri-loader";

export function loadMap(element, mapOptions, mapLayers) {
  return loadModules([
    "esri/Map", 
    "esri/views/MapView", 
    "esri/widgets/Sketch",
    "esri/layers/GraphicsLayer", 
    "esri/widgets/LayerList", 
    "esri/layers/FeatureLayer"
  ], {
    css: true
  }).then(([Map, MapView, Sketch, GraphicsLayer, LayerList, FeatureLayer]) => {
    if (!element) {
      // component or app was likely destroyed
      return;
    }
    // create the Map
    const map = new Map(mapOptions);

    // show the map at the element
    let mapView = new MapView({ map, container: element, ...mapOptions });

    // add layers to the map
    const SketchLayer = new GraphicsLayer({ title: mapLayers.SketchLayerName });
    const unitsLayer = new FeatureLayer({ url: mapLayers.unitLayerUrl, outFields: ['*'], visible: true });
    const hospitalsLayer = new FeatureLayer({ url: mapLayers.hospitalsLayerUrl, outFields: ['*'], visible: true });

    map.addMany([unitsLayer, hospitalsLayer, SketchLayer]);
    addWidgetToMap(mapView, SketchLayer, Sketch, LayerList);

    // wait for the view to load TODO: may not need this?
    return mapView.when(async () => {
      const query = unitsLayer.createQuery();
      const layerFeatures =  await unitsLayer.queryFeatures(query);
      const gridData = layerFeatures.features.map(feature => feature.attributes);
      // return gridData;
      return {
        gridData,
        mapView
      }
    });

  });
}


const addWidgetToMap = (view, SketchLayer, Sketch, LayerList) => {
  // create sketch widget.
  const sketch = new Sketch({ layer: SketchLayer, view: view, creationMode: "update" });

  // create LayerList widget.
  const layerList = new LayerList({ view: view });

  // add Sketch & layerList widget to the map.
  view.ui.add([
    { component: sketch, position: "top-right", index: 0 }, 
    { component: layerList, position: "bottom-right", index: 1}
  ]);
}
