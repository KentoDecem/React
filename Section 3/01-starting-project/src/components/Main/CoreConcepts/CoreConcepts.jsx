import Concept from "./Concept/Concept";
import { CORE_CONCEPTS } from "./data";
import styles from "./CoreConcepts.module.css";
import Section from "../../Wrappers/Section";

function CoreConcepts() {
  return (
    <Section title="Core Concepts" className={styles.coreConcepts}>
      <ul className={styles.ul}>
        {CORE_CONCEPTS.map((item, index) => (
          <Concept key={index} {...item} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
