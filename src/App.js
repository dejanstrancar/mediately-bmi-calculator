import React from "react";
import meterTableRes from "./data/meterTable.json";

import Header from "./components/Header";
import CalculationForm from "./components/CalculationForm";
import ReferenceValues from "./components/ReferenceValues";
import IntroductionBlock from "./components/IntroductionBlock";
import ResultBlock from "./components/ResultBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <ResultBlock
        meter={{
          color: "color orange",
          label: "Severly underweight",
          value: "16-16,99",
          min: 16,
          max: 16.99
        }}
      />
      <CalculationForm />
      <ReferenceValues meterTable={meterTableRes} />
      <IntroductionBlock />
    </div>
  );
}

export default App;
