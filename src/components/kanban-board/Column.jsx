import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";
import "./KanbanBoard.css";

const Column = ({ column, tasks, moveTask }) => {
  // use the useDrop hook to make the column a drop target

  const [_, drop] = useDrop({
    // Specify the type of items that can be dropped here
    accept: "TASK",
    // Handle the drop event
    drop: (item) => moveTask(item.id, item.columnId, column.id),
  });

  return (
    //Attach the drop ref to make this div a drop target
    <div ref={drop} className="column">
      <h2>{column.title}</h2>
      <div className="task-list">
        {/* Render each task in the column*/}
        {tasks.map((task) => (
          <Task key={task.id} task={task} columnId={column.id}></Task>
        ))}
      </div>
    </div>
  );
};

export default Column;
