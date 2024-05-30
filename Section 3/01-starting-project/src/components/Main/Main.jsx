import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data-with-examples";
import CoreConcept from "./CoreConcept/CoreConcept";

import styles from "./Main.module.css";
import TabButton from "./TabButton";
import { useState } from "react";

function Main() {
  const [tabContent, setTabContent] = useState();
  const [animation, setAnimation] = useState(false);

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  var menuLength = Object.keys(EXAMPLES).length;

  return (
    <main className={styles.main}>
      <section className={styles.coreConcepts}>
        <h2>Core Concepts</h2>
        <ul className={styles.ul}>
          {CORE_CONCEPTS.map((item, index) => (
            <CoreConcept key={index} {...item} />
          ))}
        </ul>
      </section>

      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            active={tabContent === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            active={tabContent === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            active={tabContent === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            active={tabContent === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>

        {!tabContent ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content" className={animation ? "animation" : null}>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </section>
    </main>
  );
}

export default Main;
