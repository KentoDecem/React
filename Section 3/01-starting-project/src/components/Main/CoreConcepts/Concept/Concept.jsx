import styles from "./Concept.module.css";

function CoreConcept({ image, title, description }) {
  return (
    <li className={styles.li}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
