// NOTE
// This is a "special" react component that does not strictly play by
// React's rules.
//
// Conceptually, this component creates a "portal" in React by
// closing its render method off from updates (by simply rendering a div and
// never accepting re-renders) then reconnecting itself to the React lifecycle
// by listening for any new props (using componentWillReceiveProps)

// React imports
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { mapLoaded } from '../../redux/reducers/map'
import { setGridData } from '../../redux/reducers/grid'

// ESRI ArcGIS API
import { loadMap } from "../../utils/map";

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

// Component
const Map = props => {
  // set an ID for the map to attach to
  const containerID = "map-view-container";

  const mapConfig = useSelector(state => state.config.mapConfig);
  const mapLayers = useSelector(state => state.config.mapLayers);

  const dispatch = useDispatch();

  // load map with config properties
  loadMap(containerID, mapConfig, mapLayers).then((response) => {
    // call the map loaded event when we get the map view back
    dispatch(mapLoaded(response.mapView));
    dispatch(setGridData(response.gridData));
  });

  // Component template
  return <Container id={containerID}></Container>;
};

export default Map;
