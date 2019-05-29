import React from "react";
import Card from "../_globals/Card";
import MeterRecord from "../_globals/MeterRecord";

export default function ResultBlock(props) {
  return (
    <Card>
      <MeterRecord meter={props.meter} />
    </Card>
  );
}
