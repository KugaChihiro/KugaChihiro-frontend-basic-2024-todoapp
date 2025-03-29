import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";


export const EditButton = () => {
  return (
    <StyledButton onClick={() => console.log('click')} >
      <StyledImg src={pencil}  alt="Edit"/>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
    border-radius: 50%;
  }
`;

const StyledImg = styled.img`
  width:15px;
  height:15px;
`

