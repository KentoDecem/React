function TabButton({ children, active, ...props }) {
  return (
    <li>
      <button className={active ? "active" : null} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
