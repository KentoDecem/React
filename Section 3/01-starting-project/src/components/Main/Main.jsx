import styles from "./Main.module.css";
import CoreConcepts from "./CoreConcepts/CoreConcepts";
import Examples from "./Examples/Examples";

function Main() {
  return (
    <main className={styles.main}>
      <CoreConcepts />
      <Examples />
    </main>
  );
}

export default Main;
