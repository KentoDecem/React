import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import AddProject from "./components/AddProject";

function App() {
  const [projectSelected, setProjectSelected] = useState(null);
  const [addProjectStatus, setAddProjectStatus] = useState(false);
  const [projectList, setProjectList] = useState([]);

  function renderPage() {
    if (projectSelected != null) {
      return (
        <Project
          setProjectList={setProjectList}
          selected={setProjectSelected}
          add={setAddProjectStatus}
          data={projectList.filter((obj) => obj.index == projectSelected)[0]}
        />
      );
    }
    if (addProjectStatus) {
      let newIndex = 0;
      let indexesList = projectList.map((project) => project.index);
      while (indexesList.includes(newIndex)) {
        newIndex++;
      }

      return (
        <AddProject
          index={newIndex}
          select={setProjectSelected}
          add={setAddProjectStatus}
          setProjectList={setProjectList}
        />
      );
    }
    if (projectSelected == null) {
      return (
        <NoProjectSelected
          select={setProjectSelected}
          add={setAddProjectStatus}
        />
      );
    }
  }
  return (
    <div className="flex items-end h-screen pt-10">
      <Navigation
        projects={projectList}
        select={setProjectSelected}
        add={setAddProjectStatus}
      />
      {renderPage()}
    </div>
  );
}

export default App;
