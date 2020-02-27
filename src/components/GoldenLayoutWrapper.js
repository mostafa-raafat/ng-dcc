import React, { Component } from "react";
import GoldenLayout from "golden-layout";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import Grid from "./grid/grid";
import Map from "./map/Map";
import Chart from "./chart/chart";

import 'golden-layout/src/css/goldenlayout-base.css'
import 'golden-layout/src/css/goldenlayout-dark-theme.css'

//golden-layout config
const config = {
  dimensions: {
    borderWidth: 5,
    minItemHeight: 200,
    minItemWidth: 200
  },
  content: [
    {
      type: "column",
      content: [
        {
          type: 'react-component',
          title: 'Map',
          component: 'Map'
        },
        {
          type: "row",
          content: [
            {
              type: 'react-component',
              title: 'Grid',
              component: 'Grid'
            },
            {
              type: 'react-component',
              title: 'Chart',
              component: 'Chart'
            }
          ]

        }
      ]
    }
  ]
};


class GoldenLayoutWrapper extends Component {

  constructor(props) {
    super(props);
    this.goldenLayoutRef = React.createRef();
  }

  componentDidMount() {

    const wrapComponent = (Component, store) => {
      class Wrapped extends React.Component {
        render() {
          return (
            <Provider store={store}>
              <Component {...this.props} />
            </Provider>
          );
        }
      }
      return Wrapped;
    }

    const layout = new GoldenLayout(config, this.layout);
    layout.registerComponent("Map", wrapComponent(Map, this.props.store));
    layout.registerComponent("Grid", wrapComponent(Grid, this.props.store));
    layout.registerComponent("Chart", wrapComponent(Chart, this.props.store));
    setTimeout(() => { layout.init(); });

    layout.on("stackCreated", (stack) => {
      const maximizeElement = stack.element.find(".lm_maximise")[0];
      stack.on("maximised", () => {
        console.log("is maximized here");
      });

      stack.on("minimised", () => {
        console.log("is minimized here");
      });
    });

  }

  render() {
    return (
      <div className="goldenLayout" style={{ height: "100vh" }} ref={input => (this.layout = input)} />
    );
  }
}

export default (GoldenLayoutWrapper = connect(
  null,
  null
)(GoldenLayoutWrapper));




