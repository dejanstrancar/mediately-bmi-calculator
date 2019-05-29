import React from "react";
import Styled from "./Header.styles";

export default function Header(props) {
  return (
    <Styled.header>
      <Styled.title>{props.title}</Styled.title>
    </Styled.header>
  );
}
