import React from "react";
import "./TodoForm.css"
import { TodoContex } from "../TodoContex";

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContex)
    const [newTodoValue, setNewTodoValue] = React.useState ("");

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Nuevo ToDo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                type="button"
                className="TodoForm-button
                TodoForm-button--cancelar"
                onClick={onCancel}
                >Cancelar
                </button>
                <button 
                type="submit"
                className="TodoForm-button
                TodoForm-button--add">
                    Guardar
                </button>
            </div>
        </form>
    );
}
export {TodoForm}
