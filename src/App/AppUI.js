import React from "react";
import { TodoCounter} from "../TodoCounter";
import { TodoSearch} from "../TodoSearch";
import { TodoList} from "../TodoList";
import { TodoItem} from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { CreateTodoButton} from "../CreateTodoButton";
import {TodoForm} from "../TodoForm"
import { Modal } from "../Modal";
import { TodoContex } from "../TodoContex";

function AppUI() {
   const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
} = React.useContext (TodoContex);


    return (
        <>
          <TodoCounter 
        //   completed={completedTodos} 
        //   total={totalTodos}
          />
          <TodoSearch
        //   searchValue={searchValue}
        //   setSearchValue={setSearchValue} 
          />

        <TodoList>
            {loading && (
                <>
                <TodosLoading />
                <TodosLoading />
                </>
            )
            }
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 
            0) && <TodosEmpty />}
            
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              // Forma de pasarle una funcion a una componente sin ejecutarla
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)} 
              />
            ))}
        </TodoList>
                
        <CreateTodoButton setOpenModal={setOpenModal} />
    
        {openModal && (
        <Modal>
            <TodoForm />
        </Modal>
        )}
        </>
      );
}

export { AppUI}