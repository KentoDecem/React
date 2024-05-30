function TabButton({ children, onSelect, active }) {
  return (
    <li>
      <button className={active ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
