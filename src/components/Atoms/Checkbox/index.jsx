import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import Check from "../../../assets/svg/check.svg";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImg src={Check} />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background: transparent;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY_TRANSLUCENT_2};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  display: none;

  ${StyledButton}:hover & {
    display: inline;
  }
`;
