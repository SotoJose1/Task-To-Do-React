import React from "react";
import {TodoContex} from "../TodoContex";
import "./TodoSearch.css";


function TodoSearch() {
  const{
    searchValue,
    setSearchValue,
} = React.useContext (TodoContex);

    return (
      <input placeholder="Escribe Aqui" 
      className="TodoSearch"
      value={searchValue}
      onChange={(Event) => {
        setSearchValue(Event.target.value);
      }}/>
    );
  }

export { TodoSearch };