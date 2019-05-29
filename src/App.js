import React, { useState } from "react";
import meterTableRes from "./data/meterTable.json";
import Styled from "./App.styles";

import Header from "./components/Header";
import CalculationForm from "./components/CalculationForm";
import ReferenceValues from "./components/ReferenceValues";
import IntroductionBlock from "./components/IntroductionBlock";
import ResultBlock from "./components/ResultBlock";

function App() {
  const [selectedValue, setSelectedValue] = useState(meterTableRes[4]);

  const calculateBMI = () => {
    console.log("Calculating...");
  };

  return (
    <React.Fragment>
      <Styled.globalStyles />
      <Styled.app>
        <Header title="BMI 1.0" />
        <ResultBlock meter={selectedValue} />
        <CalculationForm onParametersChange={calculateBMI} />
        <ReferenceValues meterTable={meterTableRes} />
        <IntroductionBlock />
      </Styled.app>
    </React.Fragment>
  );
}

export default App;
