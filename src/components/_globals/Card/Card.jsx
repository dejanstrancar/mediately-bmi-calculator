import React from "react";
import Styled from "./Card.styles";

export default function Card(props) {
  return <Styled.card>{props.children}</Styled.card>;
}
