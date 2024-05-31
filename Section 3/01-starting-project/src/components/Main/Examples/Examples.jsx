import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "./data-with-examples";
import Section from "../../Wrappers/Section";
import Tabs from "../../Wrappers/Tabs";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = "Please select a topic.";
  if (selectedTopic)
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );

  const TabButtons = Object.keys(EXAMPLES).map((id) => (
    <TabButton active={tabContent === id} onClick={() => handleSelect(id)}>
      {EXAMPLES[id].title}
    </TabButton>
  ));

  return (
    <Section title="Examples" id="examples">
      <Tabs buttons={<>{TabButtons}</>}>{tabContent}</Tabs>
    </Section>
  );
}

export default Examples;
