import React from "react";
import styled from "styled-components";
import {Title} from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

export default function MainPage ()  {
  return (<StyledWrapper><StyledTitleandCard><Title/><TodoCard/></StyledTitleandCard></StyledWrapper>)
}

const StyledWrapper = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin-top:60px;

  @media (max-width:${BREAKPOINT.MEDIUM}){
    margin-top:20px;
  }
`

const StyledTitleandCard = styled.div`
  width:500px;
  max-width: 100%;
  gap:20px;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media (max-width:${BREAKPOINT.MEDIUM}){
    margin-left:20px;
    margin-right:20px;
  }
`