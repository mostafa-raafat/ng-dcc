// Copyright 2019 Esri
// React imports
import React from "react";

// Redux imports
import { useSelector } from "react-redux";

// Component imports
import Map from "./map/Map";
import Grid from "./grid/grid";
import LoadScreen from "./loading-screen/loading-screen";

// Styled Components
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

// Component definition
const Main = props => {
  const config = useSelector(state => state.config);
  return (
    <Container>
      <LoadScreen />
      <MapWrapper>
        <Map mapConfig={config.mapConfig}  mapLayers={config.mapLayers} />
      </MapWrapper>
      <Grid gridConfig={config.grid} />
    </Container>
  );
};

export default Main;
