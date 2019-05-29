import styled, { createGlobalStyle } from "styled-components";

export default {
  globalStyles: createGlobalStyle`
    body,html {
        margin:0;
        padding:0;
        font-family: Arial, sans-serif;
    }
  `,
  app: styled.div`
    margin: 0;
    min-height: calc(100vh - 10px - 10px);
    width: calc(100% - 10px - 10px);
    padding: 10px;
    background: #e9ecef;
  `
};
