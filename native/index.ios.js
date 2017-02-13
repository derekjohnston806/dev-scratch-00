/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import FirstScene from "./src/scenes/FirstScene.react";
import SecondScene from "./src/scenes/SecondScene.react";

class Application extends Component {
  /**
    renderScene(route, navigator)

    @desc:
      - based on the state of the navigator, render the approproate scene.

    @param:
      - route (Object): The route object from the navigation stack.
      - navigator (Object): A reference to the navigator that invoked the object.
  */
  renderScene(route, navigator) {
    switch (route.index) {
      case 0:
        return <FirstScene navigator={ navigator } />
      case 1:
        return <SecondScene navigator={ navigator } />
    }
  }

  /**
    render()

    @desc:
      - Draw the component on the screen.

    @param:
      - null

    @return:
      - null
  */
  render() {
    const routes = [
      { title: "First Scene", index: 0 },
      { title: "Second Scene", index: 1 }
    ];

    return <Navigator
      initialRoute={ routes[0] }
      initialRouteStack={ routes }
      renderScene={ this.renderScene }
    />
  }
}

AppRegistry.registerComponent('scratchpad0', () => Application);
