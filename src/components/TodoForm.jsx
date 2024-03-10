import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState(props.category);
  const handleChange = (e) => {
    setInput(e.target.value);
    setCategory(props.category);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory(props.category);
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      category: category,
    });
    setInput("");
  };
  return (
    <div className="todoFormContainer">
      <form action="" className="addTodo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your task"
          value={input}
          name="text"
          className="addTodo-input"
          onChange={handleChange}
        />
        <button className="addTodo-button">
          <i className="fa-solid fa-plus"></i>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
