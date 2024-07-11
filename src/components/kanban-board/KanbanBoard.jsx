import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "./Column";
import "./KanbanBoard.css";

// Initial state of the Kanban board
const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const KanbanBoard = () => {
  const [state, setState] = useState(initialData);

  // Function to move a task from one column to another
  const moveTask = (taskId, sourceColumnId, destinationColumnId) => {
    if (sourceColumnId === destinationColumnId) {
      return;
    }
    //get the source and destination columns
    const sourceColumn = state.columns[sourceColumnId];
    const destinationColumn = state.columns[destinationColumnId];

    //create new Arrays of tasks IDs for both columns
    const sourceTasksIds = Array.from(sourceColumn.taskIds);
    const destinationTaskIds = Array.from(destinationColumn.taskIds);

    //Remove the task from the source column
    const taskIndex = sourceTasksIds.indexOf(taskId);
    sourceTasksIds.splice(taskIndex, 1);

    //Add the task to the destination column
    destinationTaskIds.push(taskId);

    //creat a new state object with the updated columns
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [sourceColumnId]: {
          ...sourceColumn,
          taskIds: sourceTasksIds,
        },
        [destinationColumnId]: {
          ...destinationColumn,
          taskIds: destinationTaskIds,
        },
      },
    };

    //update the state
    setState(newState);
  };

  return (
    // Wrap the app with DndProvider to enable drag and drop
    <DndProvider backend={HTML5Backend}>
      <div className="KanbanBoard">
        <h1>Kanban Board</h1>
        <div className="board">
          {/* Render each column */}
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
                moveTask={moveTask}
              />
            );
          })}
        </div>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
