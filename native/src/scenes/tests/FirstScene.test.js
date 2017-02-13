/**
    FirstScene.test.js

    @author:
      - Derek Johnston

    @desc:
      - Provide a test for the FirstScene component.
*/
import "react-native";
import React from "react";
import FirstScene from "../FirstScene.react";

import renderer from "react-test-renderer";

test("Should render itself correctly.", () => {
  const tree = renderer.create(<FirstScene />).toJSON();
  expect(tree).toMatchSnapshot();
});
