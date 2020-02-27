// React imports
import React, { Component } from "react";

// Redux imports
import { connect, ReactReduxContext, } from "react-redux";
import { fetchConfig } from "../redux/reducers/config";

// Component imports
import LoadScreen from "./loading-screen/loading-screen";
import GoldenLayoutWrapper from "./GoldenLayoutWrapper";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchConfig();
  }

  render() {
    // RENDER RETURN
    // app is initializing for the following reasons, show the load screen
    // 1. config is not yet loaded
    if (!this.props.config.loaded) {
      return <LoadScreen />;
    } else {
      return (
        <ReactReduxContext.Consumer>
          {({ store }) => <div><GoldenLayoutWrapper store={store} /></div>}
        </ReactReduxContext.Consumer>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConfig: () => dispatch(fetchConfig())
  }
}

export default (App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
