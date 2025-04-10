import React,{useState} from "react";
import styled from 'styled-components';
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import {AddTaskButton} from "../../Atoms/AddTaskButton";

export default function TodoCard() {

  const [taskList, setTaskList] = useState([
    { name: "", initializing: true },
  ]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: '', initializing: true }]);
  }

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, taskindex) => taskindex !== index));
  }

  const onTaskNameChange = (value,index) => {
    if (value=== '') {
      setTaskList(taskList.filter((_, taskindex) => taskindex !== index));
    }
    else {
      setTaskList(taskList.map((taskcontent,taskindex) => {
        if (taskindex ===  index) {
          return { ...taskcontent, name: value, initializing: false };
        }
        return taskcontent;
      }))
    }
  }


  return (
    <StyledWrapper>
      <AddTaskButton onAddTaskButtonClick = {onAddTaskButtonClick}/>
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />))
        }
      </StyledTaskList>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width:auto;
  background-color:${COLOR.LIGHT_BLACK};
  border-radius:4px;
  padding:20px;
  margin:0;
`


const StyledTaskList = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  gap:10px;
  margin:10px 0px 0px 0px;
  padding:0;
`