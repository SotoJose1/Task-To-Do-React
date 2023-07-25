import React from "react";
import { TodoContex } from "../TodoContex";
import "./TodoCounter.css";

function TodoCounter() {
    const{
      completedTodos,
      totalTodos,
    } = React.useContext (TodoContex);
    
    return (
      <h1 className="TodoCounter">
        Tareas <span>{completedTodos}</span> de <span>{totalTodos}</span> TO-DOS
      </h1>
    );
  }

export { TodoCounter };
