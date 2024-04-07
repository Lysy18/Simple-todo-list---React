const TodoCategoryBtn = ({ children, ...props }) => {
  return (
    <li>
      <button {...props}>
        <div className="liChildrenConatainer">{children}</div>
      </button>
    </li>
  );
};

export default TodoCategoryBtn;
