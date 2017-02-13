/**
    SecondScene.test.js

    @author:
      - Derek Johnston

    @desc:
      - Provide a test for the SecondScene component.
*/
import "react-native";
import React from "react";
import SecondScene from "../SecondScene.react";

import renderer from "react-test-renderer";

test("Should render itself correctly.", () => {
  const tree = renderer.create(<SecondScene />).toJSON();
  expect(tree).toMatchSnapshot();
});
