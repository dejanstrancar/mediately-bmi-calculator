import React from "react";
import MeterRecord from "../_globals/MeterRecord";
import Card from "../_globals/Card";

export default function ReferenceValues(props) {
  return (
    <Card>
      <h2>Reference values</h2>
      {props.meterTable.map(meter => (
        <MeterRecord meter={meter} />
      ))}
    </Card>
  );
}
