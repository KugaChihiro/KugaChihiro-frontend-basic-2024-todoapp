import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Plus from "../../../assets/svg/plus.svg";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = () => {
  return (
    <StyledButton>
      <img src = {Plus}/>
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display:flex;
  gap:10px;
  margin:0;
  padding: 2px 6px;
  align-items:center;
  color:${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  background: transparent;
  border:none;
  ${TEXT.S}

  &:hover {
    background-color:${COLOR.GREEN_TRANSLUCENT};
    border-radius: 12px;
  }
`

const StyledText = styled.p`
  margin:0;
  padding:0;
`
