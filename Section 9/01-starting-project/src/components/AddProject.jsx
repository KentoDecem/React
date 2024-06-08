import { useState } from "react";

function addProject({ select, add, index, setProjectList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  function save() {
    const originalDate = new Date(date);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = originalDate.toLocaleDateString("en-US", options);

    const newProject = {
      index: index,
      title: title,
      description: description,
      date: formattedDate,
      tasks: [],
    };

    setProjectList((prev) => [...prev, { ...newProject }]);

    add(false);
    select(index);
  }

  return (
    <main
      className="self-start py-12 text-zinc-900 flex flex-col 
    gap-6 w-full px-12"
    >
      <div className="flex justify-end gap-6 items-end  w-full">
        <button
          onClick={() => {
            add(false);
            select(null);
          }}
          className="bg-transparent text-zinc-400 py-3 px-6 w-fit text-2xl 
    font-medium rounded-lg hover:text-zinc-800 hover:scale-105 transition-all"
        >
          Cancel
        </button>
        <button
          onClick={save}
          className=" border-white bg-zinc-900 border-2 text-zinc-100 py-3 px-6 w-fit text-2xl 
    font-medium rounded-lg hover:border-white hover:text-white hover:scale-105 transition-all"
        >
          Save
        </button>
      </div>

      <label className="flex flex-col">
        <p className="text-xl text-zinc-400 uppercase leading-relaxed tracking-wide">
          Title
        </p>
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          className="text-xl rounded-lg bg-zinc-100 border-2 focus:bg-white p-2 transition-colors outline-none"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-xl text-zinc-400 uppercase leading-relaxed tracking-wide">
          Description
        </p>
        <textarea
          onChange={(event) => setDescription(event.target.value)}
          value={description}
          className="text-xl min-h-24 max-h-64 rounded-lg bg-zinc-100 border-2 focus:bg-white p-2 transition-colors outline-none"
        />
      </label>
      <label className="flex flex-col">
        <p className="text-xl text-zinc-400 uppercase leading-relaxed tracking-wide">
          Due Date
        </p>
        <input
          onChange={(event) => setDate(event.target.value)}
          value={date}
          type="date"
          className="text-xl rounded-lg bg-zinc-100 border-2 focus:bg-white p-2 transition-colors outline-none"
        />
      </label>
    </main>
  );
}

export default addProject;
