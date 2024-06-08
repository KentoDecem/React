import React, { useState } from "react";

function Project({ data, setProjectList, selected, add }) {
  const [input, setInput] = useState("");
  if (!data) {
    selected(null);
    add(false);
    return <h2>The project does not exist</h2>;
  }
  return (
    <main className="self-start py-12 text-zinc-900 flex flex-col gap-6 w-full px-12">
      <div className="flex justify-between items-end  w-full">
        <h1 className="font-bold text-4xl">{data.title}</h1>
        <button
          onClick={() => {
            setProjectList((prev) => {
              return prev.filter((obj) => obj.index !== data.index);
            });
            selected(null);
          }}
          className="cursor-pointer hover:scale-105 hover:text-red-400 transition-all"
        >
          Delete
        </button>
      </div>
      <h3 className="text-zinc-400">{data.date}</h3>
      <h2>{data.description}</h2>
      <hr className="border-2 rounded-full my-5" />
      <h2 className="font-bold text-3xl">Tasks</h2>
      <div className="flex gap-5">
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          className="text-xl rounded-lg bg-zinc-100 border-2 focus:bg-white p-2 transition-colors outline-none"
        />
        <button
          onClick={() =>
            setProjectList((prev) => {
              const newState = [...prev];
              const projectIndex = newState.findIndex((i) => i === data);

              if (projectIndex !== -1) {
                newState[projectIndex] = {
                  ...newState[projectIndex],
                  tasks: [...newState[projectIndex].tasks, input],
                };
              }

              return newState;
            })
          }
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          Add Task
        </button>
      </div>
      {data.tasks.length > 0 && (
        <ul className="flex bg-zinc-100 rounded-lg flex-col px-6 py-6 gap-10">
          {data.tasks.map((task, index) => (
            <li key={index} className="flex justify-between">
              {task}
              <button
                onClick={() =>
                  setProjectList((prev) => {
                    let checkpoint = structuredClone(prev);

                    let locatedArray =
                      prev[prev.findIndex((i) => i == data)].tasks;
                    let itemToRemove =
                      prev[prev.findIndex((i) => i == data)].tasks[index];
                    let indexOfItem = locatedArray.indexOf(itemToRemove);

                    let newArray = [];

                    if (indexOfItem > -1) {
                      newArray = locatedArray.splice(indexOfItem, 1);
                    }

                    return checkpoint;
                  })
                }
                className="cursor-pointer hover:scale-105 hover:text-red-400 transition-all"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Project;
