import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todoList, completeTodo, deleteTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todoList.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
        <TiEdit />
      </div>
    </div>
  ));
};

export default Todo;
