/**
    FirstScene.react.js

    @author:
      - Derek Johnston

    @desc:
      - The first in a series of navigation scenes for learning.
*/
import React, { Component } from "react";
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

export default class FirstScene extends Component {
  /**
    constructor(props)

    @desc:
      - Create an instance of the FirstScene component.

    @param:
      - props (Object): The component's properties.

    @return:
      - (Object): An instance of FirstScene.
  */
  constructor(props) {
    super(props);

    this.navigate = this.navigate.bind(this);
  }

  /**
    navigate()

    @desc:
      - Navigate to the second scene.

    @param:
      - null

    @return:
      - null
  */
  navigate() {
    this.props.navigator.push({ index: 1 });
  }

  /**
    render()

    @desc:
      - Draw the component on the screne.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <View style={ styles.container }>
      <Text style={ styles.titleText }>
        First Scene
      </Text>
      <TouchableHighlight onPress={ this.navigate }>
        <Text style={ styles.buttonText }>
          Go to Second Scene
        </Text>
      </TouchableHighlight>
    </View>
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#17B14B",
    flex: 1,
    justifyContent: "center"
  },

  titleText: {
    color: "#E6E6E6",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(18)
  },

  buttonText: {
    color: "#395E66",
    fontSize: PixelRatio.getPixelSizeForLayoutSize(12)
  }
});
