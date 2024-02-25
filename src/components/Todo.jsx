import  { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  const test = () => {
    console.log("test");
  };
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} className="heh" onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => test(todo.id)} />
        <TiEdit />
      </div>
    </div>
  ));
};

export default Todo;
