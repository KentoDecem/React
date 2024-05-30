import styles from "./Header.module.css";
import reactLogo from "../../assets/react-core-concepts.png";

function Header() {
  function RandomAdjective() {
    let adjective = ["Fundamental", "Crucial", "Core"];
    let randomIndex = (Math.random() * adjective.length) | 0;
    return adjective[randomIndex];
  }

  return (
    <header className={styles.header}>
      <img className={styles.img} src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        <RandomAdjective /> React concepts you will need for almost any app you
        are going to build!
      </p>

    </header>
  );
}

export default Header;
