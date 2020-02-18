// React imports
import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

// Redux imports
import { useSelector, useDispatch } from "react-redux";
import { fetchConfig } from "../redux/reducers/config";

// Component imports
import LoadScreen from "./loading-screen/loading-screen";
import Main from "./Main";

// Component definition
const App = props => {
  // redux store state
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

  // when the component mounts request the config and load it into the Redux state
  useEffect(() => {
    dispatch(fetchConfig());
  }, [dispatch]);

  // once the component mounts and the config loads, check if we have a saved session
  useEffect(() => {
    // if the config isn't yet loaded then skip this effect
    if (!config.loaded) {
      return;
    }

  }, [config]);

  // RENDER RETURN
  // app is initializing for the following reasons, show the load screen
  // 1. config is not yet loaded
  if (!config.loaded){
    return <LoadScreen />;
  }

  // App is initialized and user is authenticated if needed, route to main component
  return (
    <>
      <Route path="/main" component={Main} />
      <Redirect to="/main" />
    </>
  );
};

export default App;
