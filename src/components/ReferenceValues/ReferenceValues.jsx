import React from "react";
import MeterRecord from "../_globals/MeterRecord";
import Card from "../_globals/Card";
import Styled from "./ReferenceValues.styles";

export default function ReferenceValues(props) {
  return (
    <Card>
      <Styled.title>Reference values</Styled.title>
      {props.meterTable.map((meter, index) => (
        <Styled.meterWrapper key={index}>
          <MeterRecord
            color={meter.color}
            label={meter.label}
            value={meter.value}
          />
        </Styled.meterWrapper>
      ))}
    </Card>
  );
}
