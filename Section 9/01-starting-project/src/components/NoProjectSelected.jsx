import noProject from "../assets/no-projects.png";

function NoProjectSelected({ select, add }) {
  return (
    <section
      className="self-center text-center justify-center w-full flex 
flex-col items-center gap-10 px-6"
    >
      <img className="w-fit h-32" src={noProject} alt="" />
      <h2 className="font-bold text-3xl text-zinc-900">No Project Selected</h2>
      <h3 className="font-medium text-2xl text-gray-500">
        Select a project or get started with a new one!
      </h3>
      <button
        onClick={() => {
          add(true);
          select(null);
        }}
        className="bg-zinc-800 text-zinc-300 py-3 px-6 text-2xl 
  font-medium rounded-2xl"
      >
        Create new project
      </button>
    </section>
  );
}

export default NoProjectSelected;
