function Navigation({ projects, select, add }) {
  return (
    <nav
      className="list-none flex flex-col gap-10 h-full py-16 px-12
 bg-zinc-950 rounded-tr-2xl max-w-fit w-3/6 relative"
    >
      <button
        className="font-bold text-s absolute top-3 right-5 z-10
         uppercase hover:scale-110 text-gray-300 text-end
        transition-transform cursor-pointer"
        onClick={() => {
          add(false);
          select(null);
        }}
      >
        X
      </button>
      <h2 className="font-medium text-3xl text-white uppercase">
        Your Projects
      </h2>
      <button
        onClick={() => {
          add(true);
          select(null);
        }}
        className="bg-transparent border-zinc-300 border-2 text-zinc-300 py-3 px-6 w-fit text-2xl 
    font-medium rounded-lg hover:border-white hover:text-white transition-all"
      >
        + Add Project
      </button>

      {projects &&
        projects.map((project) => (
          <li
            key={project.index}
            onClick={() => select(project.index)}
            className="text-zinc-300 p-3 text-2xl font-medium rounded bg-zinc-900 
          text-center cursor-pointer hover:scale-105 hover:bg-zinc-800 transition-all"
          >
            {project.title}
          </li>
        ))}
    </nav>
  );
}

export default Navigation;
