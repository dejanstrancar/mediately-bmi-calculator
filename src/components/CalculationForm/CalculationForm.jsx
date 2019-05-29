import React from "react";
import Card from "../_globals/Card";

export default function CalculationForm() {
  return (
    <Card>
      <div>
        Weight [kg] <input type="text" value="" placeholder="100" />
      </div>
      <div>
        Height [cm] <input type="text" value="" placeholder="180" />
      </div>
    </Card>
  );
}
