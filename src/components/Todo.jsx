import React, { useState } from "react";
import Task from "./Task";

function Todo() {
  const [inputTask, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  function handleTask(e) {
    e.preventDefault();
    if (!inputTask.trim()) return;
    if (task.includes(inputTask)) {
      setInput("");
      return;
    }
    setTask((prev) => [...prev, inputTask]);
    setInput("");
  }

  function handleClearAll() {
    setTask([]);
    setCheckedTasks([]);
  }

  function handleDelete(index) {
    setTask((prev) => prev.filter((_, i) => i !== index));
    setCheckedTasks((prev) => prev.filter((i) => i !== index));
  }

  function handleChecked(index) {
    setCheckedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  return (
    <div className="flex-1 w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-300 via-purple-300 to-pink-200 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-4 text-white sm:px-6 sm:py-5">
        <h1 className="text-center text-2xl font-bold tracking-wide sm:text-3xl">
          Task-Tracker
        </h1>
      </div>

      {/* Todo Content */}
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        {/* Input Form */}
        <form className="mb-6" onSubmit={handleTask}>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              className="w-full rounded-lg border-2 border-gray-200 p-3 text-gray-700 focus:border-purple-500 focus:outline-none"
              type="text"
              placeholder="What needs to be done?"
              value={inputTask}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-bold text-white shadow-md transition-transform hover:scale-105 hover:shadow-lg focus:outline-none active:scale-95 sm:flex-shrink-0"
            >
              Add
            </button>
          </div>
        </form>

        {/* Tasks Container */}
        <div className="mb-6 max-h-[60vh] overflow-y-auto space-y-3 px-1 py-2">
          {task.length > 0 ? (
            task.map((item, index) => (
              <Task
                key={index}
                taskname={item}
                onDelete={() => handleDelete(index)}
                onChecked={() => handleChecked(index)}
                isDone={checkedTasks.includes(index)}
              />
            ))
          ) : (
            <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
              <p className="text-center text-gray-500">
                No tasks yet. Start by adding one!
              </p>
            </div>
          )}
        </div>

        {/* Footer with Task Stats and Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-200 pt-4 gap-3">
          <p className="text-sm text-gray-600">
            {task.length > 0
              ? `${task.length - checkedTasks.length} remaining`
              : ""}
          </p>
          {task.length > 0 && (
            <button
              className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white transition-all hover:bg-red-600 focus:outline-none active:scale-95 w-full sm:w-auto"
              onClick={handleClearAll}
            >
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
