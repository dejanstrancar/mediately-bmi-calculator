import React from "react";
import Styled from "./MeterRecord.styles";

export default function MeterRecord(props) {
  return (
    <Styled.meterWrapper>
      <Styled.labelWrapper>
        <Styled.color color={props.meter.color} />
        <Styled.label>{props.meter.label}</Styled.label>{" "}
      </Styled.labelWrapper>
      <Styled.value>{props.meter.value}</Styled.value>
    </Styled.meterWrapper>
  );
}
