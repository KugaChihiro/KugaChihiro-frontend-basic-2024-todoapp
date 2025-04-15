import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import pencil from "../../../assets/svg/pencil.svg";

export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <img src={pencil} alt="Edit" />
    </StyledButton>
  );
};

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
