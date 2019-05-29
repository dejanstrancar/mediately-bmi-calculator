import React from "react";

export default function MeterRecord(props) {
  return (
    <div>
      [{props.meter.color}] {props.meter.label} {props.meter.value}
    </div>
  );
}
