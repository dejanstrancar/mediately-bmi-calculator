import React, { useState } from "react";
import meterTableRes from "./data/meterTable.json";
import Styled from "./App.styles";

import Header from "./components/Header";
import CalculationForm from "./components/CalculationForm";
import ReferenceValues from "./components/ReferenceValues";
import IntroductionBlock from "./components/IntroductionBlock";
import ResultBlock from "./components/ResultBlock";

function App() {
  const [resultValue, setResultValue] = useState(0);

  const calculateBMI = parameters => {
    const result = (
      parameters.weight / Math.pow(parameters.height / 100, 2)
    ).toFixed(2);
    setResultValue(result);
  };

  return (
    <React.Fragment>
      <Styled.globalStyles />
      <Styled.app>
        <Header title="BMI 1.0" />
        <ResultBlock meterTable={meterTableRes} result={resultValue} />
        <CalculationForm onParametersChange={calculateBMI} />
        <ReferenceValues meterTable={meterTableRes} />
        <IntroductionBlock />
      </Styled.app>
    </React.Fragment>
  );
}

export default App;
