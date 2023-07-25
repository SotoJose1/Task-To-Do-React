import { CompleteIcon } from "../TodoIcon/CompleteIcon"
import { DeleteIcon} from "../TodoIcon/DeleteIcon"
import "./TodoItem.css";

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon
        completed={props.complete} 
        onComplete={props.onComplete} />
       
        <p className={`TodoItem-p
        ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
        </p>
        <DeleteIcon
          onDelete={props.onDelete} />
      </li>
    );
  }

  export { TodoItem }
  
  {/* Esta seria una forma de eliminar Item
  <span
         className={`Icon Icon-check 
        ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}>
        V  
    </span> 
    
    <span className="Icon Icon-delete"
        onClick={props.onDelete}>
            X
        </span>*/ }