import React, { useState, useEffect } from "react";
import Card from "../_globals/Card";
import Styled from "./CalculationForm.styles";

export default function CalculationForm(props) {
  const [parameters, setParameters] = useState({ weight: 100, height: 180 });

  useEffect(() => {
    if (!parameters.weight || !parameters.height) return;

    props.onParametersChange(parameters);
  });

  const onChange = e => {
    if (e.target.value >= 0 && e.target.value < 999) {
      setParameters({
        ...parameters,
        [e.target.name]: e.target.value
      });
    }
  };

  return (
    <Card>
      <Styled.fieldWrapper>
        <Styled.label>Weight [kg]</Styled.label>{" "}
        <Styled.inputField
          type="number"
          value={parameters.weight}
          name="weight"
          onChange={onChange}
        />
      </Styled.fieldWrapper>

      <Styled.fieldWrapper>
        <Styled.label>Height [cm]</Styled.label>{" "}
        <Styled.inputField
          type="number"
          value={parameters.height}
          name="height"
          onChange={onChange}
        />
      </Styled.fieldWrapper>
    </Card>
  );
}
