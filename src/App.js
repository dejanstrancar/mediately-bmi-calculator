import React from "react";
import meterTableRes from "./data/meterTable.json";
import { createGlobalStyle } from "styled-components";
import Styled from "./App.styles";

import Header from "./components/Header";
import CalculationForm from "./components/CalculationForm";
import ReferenceValues from "./components/ReferenceValues";
import IntroductionBlock from "./components/IntroductionBlock";
import ResultBlock from "./components/ResultBlock";

function App() {
  const GlobalStyle = createGlobalStyle`
  body,html {
    margin:0;
    padding:0;
    font-family: Arial, sans-serif;
  }
`;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Styled.app>
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
      </Styled.app>
    </React.Fragment>
  );
}

export default App;
