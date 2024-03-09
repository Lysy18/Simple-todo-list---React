export default function TodoBtn({ children, ...props }) {
  return (
    <li>
      <button {...props}>{children}</button>
    </li>
  );
}
