import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({
  todoList,
  completeTodo,
  deleteTodo,
  saveEditTodo,
  selectedCategory,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    todos: [],
  });

  const handleSave = () => {
    saveEditTodo(edit, todoList);
    setEdit({ id: null, value: "" });
  };
  return todoList.map((todo, index) => (
    <div key={index}>
      {selectedCategory == todo.category ? (
        <div
          className={
            todo.isComplete ? "todo-row complete" : `todo-row ${todo.category}`
          }
          key={index}
        >
          {edit.id == todo.id ? (
            <div>
              <input
                value={edit.value}
                onChange={(e) =>
                  setEdit({ id: todo.id, value: e.currentTarget.value })
                }
              />
              <button onClick={() => handleSave()}>Save</button>
            </div>
          ) : (
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
              {todo.text}
            </div>
          )}
          <div className="icons">
            <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
            <TiEdit
              onClick={() =>
                setEdit({ id: todo.id, value: todo.text, todos: todoList })
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  ));
};

export default Todo;
