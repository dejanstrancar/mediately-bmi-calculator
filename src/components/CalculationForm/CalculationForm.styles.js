import styled from "styled-components";

export default {
  fieldWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 20px 0;
    &:last-child {
      margin: 0 0 0 0;
    }
  `,
  label: styled.span`
    font-size: 14px;
  `,
  inputField: styled.input`
    height: 30px;
    padding: 0 10px;
  `
};
