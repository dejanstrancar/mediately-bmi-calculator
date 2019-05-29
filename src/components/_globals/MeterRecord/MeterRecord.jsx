import React from "react";
import Styled from "./MeterRecord.styles";

export default function MeterRecord(props) {
  return (
    <Styled.meterWrapper>
      <Styled.labelWrapper>
        <Styled.color color={props.color} />
        <Styled.label>{props.label}</Styled.label>{" "}
      </Styled.labelWrapper>
      <Styled.value dangerouslySetInnerHTML={{ __html: props.value }} />
    </Styled.meterWrapper>
  );
}
