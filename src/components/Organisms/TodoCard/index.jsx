import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../Atoms/AddTaskButton";

export default function TodoCard() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("task_data")) || []);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    setTaskList(taskList.filter((_, taskIndex) => taskIndex !== index));
  };

  const onTaskNameChange = (value, index) => {
    if (value === "") {
      setTaskList(taskList.filter((_, taskIndex) => taskIndex !== index));
    } else {
      setTaskList(
        taskList.map((taskContent, taskIndex) => {
          if (taskIndex === index) {
            return { ...taskContent, name: value, initializing: false };
          }
          return taskContent;
        })
      );
    }
  };

 useEffect(()=>{localStorage.setItem("task_data", JSON.stringify(taskList));},[taskList]);

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            onTaskComplete={() => onTaskComplete(index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  padding: 20px;
  margin: 0;
`;

const StyledTaskList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
