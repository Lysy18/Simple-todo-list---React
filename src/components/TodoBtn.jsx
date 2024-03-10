export default function TodoBtn({ children, ...props }) {
  return (
    <li>
      <button {...props}>
        <div className="liChildrenConatainer">{children}</div>
      </button>
    </li>
  );
}
