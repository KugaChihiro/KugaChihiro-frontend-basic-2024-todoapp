import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

const StyledText = styled.div`
  gap: 10px;
  width: fit-content;
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.ROBOTO};
  font-weight: 500;
  ${TEXT.L}
  letter-spacing:0%;
  text-align: center;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    font-family: ${FONTFAMILY.NOTO_SANS};
    ${TEXT.M}
  }
`;

export const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
