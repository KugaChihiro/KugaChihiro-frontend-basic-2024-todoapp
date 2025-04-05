import React,{useState} from "react";
import {Checkbox} from "../../Atoms/Checkbox"
import Input from "../../Atoms/Input"
import {EditButton} from "../../Atoms/EditButton"
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export default function Task({onTaskNameChange,onTaskComplete,taskName = "",defaultIsEditing=false,}) {

  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  }


  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete}/>
      </StyledCheckboxWrapper>
      <StyledNameAndButtonWrapper>
        {isEditing ? (<Input onEditComplete={onEditComplete} defaultValue={taskName} />) : (<StyledTaskName>{taskName}</StyledTaskName>)}
        <StyledEditButtonWrapper>{isEditing ? ("") : (<EditButton onClick={onEditButtonClick}/>)}</StyledEditButtonWrapper>
      </StyledNameAndButtonWrapper>
    </StyledWrapper>
  );

}

const StyledWrapper = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  margin:2px 6px;
`
const StyledCheckboxWrapper = styled.div`
  display:flex;
`

const StyledNameAndButtonWrapper = styled.div`
  margin-left:10px;
  width: 100%;
  justify-content:space-between;
  display:flex;
`

const StyledTaskName = styled.div`
  color: ${COLOR.LIGHT_GRAY_TRANSLUCENT_2};
  ${TEXT.S}
  font-family:${FONTFAMILY.NOTO_SANS};
`

const StyledEditButtonWrapper = styled.div`
  width:20px;
  margin:0;
  padding:0;
`