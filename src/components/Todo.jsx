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
    category: "",
    todos: [],
  });

  const handleSave = () => {
    saveEditTodo(edit, todoList);
    setEdit({ id: null, value: "", category: "" });
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
            <div className="todo-row">
              <input
                value={edit.value}
                onChange={(e) =>
                  setEdit({
                    id: todo.id,
                    value: e.currentTarget.value,
                    category: todo.category,
                  })
                }
              />
              <button onClick={() => handleSave()}>Save</button>
            </div>
          ) : (
            <div
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
              className="todo-row-TextConatiner"
            >
              {todo.text}
            </div>
          )}
          <div className="icons">
            <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
            <TiEdit
              onClick={() =>
                setEdit({
                  id: todo.id,
                  value: todo.text,
                  category: todo.category,
                  todos: todoList,
                })
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  ));
};

export default Todo;
