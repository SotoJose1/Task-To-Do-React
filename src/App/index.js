import React from "react";
import { TodoProvider } from "../TodoContex";
import { AppUI} from "./AppUI";

function App() {
    return (
    <TodoProvider>
      <AppUI />
    </TodoProvider> 
  )
}
export default App;
// const defaultTodos = [
//  { text: "Cortar cebolla", completed: true },
//  { text: "Tomar el Curso de Intro a React.js", completed: false },
//  { text: "abrir una lata", completed: false },
//  { text: "Comer maiz", completed: false },
// ];
// localStorage.setItem("TODOS_V1", JSON.stringify (defaultTodos));
// localStorage.removeItem("TODOS_V1");

    // loading={loading}
    // error={error}
    // completedTodos={completedTodos}
    // totalTodos={totalTodos}
    // searchValue={searchValue}
    // setSearchValue={setSearchValue}
    // searchedTodos={searchedTodos}
    // completeTodo={completeTodo}
    // deleteTodo={deleteTodo}