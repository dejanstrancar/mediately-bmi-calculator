import React, { useState, useEffect } from "react";
import Card from "../_globals/Card";
import MeterRecord from "../_globals/MeterRecord";
import Styled from "./ResultBlock.styles";

export default function ResultBlock(props) {
  const [selectedMeter, setSelectedMeter] = useState({});

  useEffect(() => {
    const result = props.meterTable.filter(meter => {
      if (meter.min <= props.result && meter.max >= props.result) {
        return meter;
      }
      return null;
    })[0];

    setSelectedMeter(result);
  }, [props.result, props.meterTable]);

  if (!props.result || !selectedMeter) {
    return (
      <Card>
        <Styled.error>Please enter valid inputs below</Styled.error>
      </Card>
    );
  }

  if (selectedMeter) {
    return (
      <Card>
        <MeterRecord
          color={selectedMeter.color}
          label={selectedMeter.label}
          value={props.result}
        />
      </Card>
    );
  }
}
