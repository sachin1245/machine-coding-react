import React from "react";
import { useDrag } from "react-dnd";
import "./KanbanBoard.css";

const Task = ({ task, columnId }) => {
  // Use the useDrag hook to make the task draggable
  const [{ isDragging }, drag] = useDrag({
    // Specify the type of this draggable item
    type: "TASK",
    // Specify the data that represents this draggable item
    item: { id: task.id, columnId },
    //collect functon to gather addtion information
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // Create the style object
  const style = {
    opacity: isDragging ? 0.5 : 1,
    cursor: "move",
  };

  return (
    // Attach the drag ref to make this div draggable
    <div ref={drag} className="task" style={style}>
      {task.content}
    </div>
  );
};

export default Task;
