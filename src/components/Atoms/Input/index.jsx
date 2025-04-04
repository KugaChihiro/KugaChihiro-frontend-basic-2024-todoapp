import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export default function Input ({ onEditComplete, defaultValue }) {

  const inputRef = useRef();

  const handleBlur = () => {
    const text = inputRef.current.value;
    onEditComplete(text);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const text = inputRef.current.value;
      onEditComplete(text);
    }
  }

  useEffect(() => {
    console.log("initialized");
    inputRef.current.focus();
  }, [])

  return (
    <StyledWrapper>
      <StyledText defaultValue={defaultValue} ref={inputRef} onBlur={handleBlur} onKeyDown={handleKeyDown}/>
    </StyledWrapper>
  )

}

const StyledWrapper = styled.div`
  background-color:${COLOR.BLACK};
  width:100%;
  padding:0px 4px;
  border-radius:2px;
  border:none;
  display:flex;
  align-items:center;
`
const StyledText= styled.input`
  width:auto;
  height:100%;
  background:transparent;
  caret-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT_2};
  border:none;
  font-family:${FONTFAMILY.NOTO_SANS};
  ${TEXT.S}
  font-weight:500;
  color:${COLOR.LIGHT_GRAY_TRANSLUCENT_2};

  &:focus {
    outline: none;
    border: none;
  }

`
