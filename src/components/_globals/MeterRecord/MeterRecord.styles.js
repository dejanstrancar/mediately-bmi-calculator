import styled from "styled-components";

export default {
  meterWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  labelWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  color: styled.div`
    width: 16px;
    height: 16px;
    background-color: ${props => props.color};
    margin: 0 10px 0 0;
  `,
  label: styled.div`
    font-size: 14px;
  `,
  value: styled.div`
    font-size: 14px;
  `
};
