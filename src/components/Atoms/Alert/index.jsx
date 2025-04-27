import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

export const Alert = () => {
  const {visible,errorText} = useAlertHandlerContext()
  return ((<StyledWrapper isActive={visible}><StyledAlert>{errorText}</StyledAlert></StyledWrapper>)
  )
}


const StyledWrapper = styled.div`
  position:absolute;
  top:80px;
  left:50%;
  width:100%;
  display:flex;
  justify-content:center;
  opacity:${(props) => props.isActive ? 1:0};
  transform: ${(props) => props.isActive ? "translate(-50%, 40%)":"translate(-50%, 0%)"};
  transition:all 0.5s ease-in-out;
`
const StyledAlert = styled.div`
  width:400px;
  background-color:${COLOR.RED};
  color:${COLOR.WHITE};
  font-family:${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  padding:10px 20px;
  border-radius:4px;
  z-index:100;

  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    width:280px;
  }
`