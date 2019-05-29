import React from "react";
import Card from "../_globals/Card";
import Styled from "./IntroductionBlock.styles";

export default function IntroductionBlock() {
  return (
    <Card>
      <Styled.title>Introduction</Styled.title>
      <Styled.text>
        The body mass index (BMI) or Quetelet index is a value derived from the
        mass (weight) and height of an individual. The BMI is defined as the
        body mass divided by the square of the body height, and is universally
        expressed in units of kg/m&sup3;, resulting from mass in kilograms and
        height in meters.
      </Styled.text>
    </Card>
  );
}
