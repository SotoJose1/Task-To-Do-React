import "./CreateTodoButton.css";
import React from "react";

function CreateTodoButton({onOpenModal, setOpenModal}) {
    return (
        <button className="CreateTodoButton"
        onClick={
            () => {
                setOpenModal(!onOpenModal);
            }
        }>+</button>
       );
  }

export { CreateTodoButton }; 

            // (Event)=> {
            //     console.log ("Diste un lcic")
            //     console.log (Event)
            //     console.log (Event.target)