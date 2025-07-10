import React from "react";
import { Trash2, CheckCircle } from "lucide-react";

function Task({ taskname, onDelete, onChecked, isDone }) {
  return (
    <div
      className={`group flex items-center justify-between rounded-lg border-l-4 p-4 shadow-sm transition-all ${
        isDone
          ? "border-green-500 bg-green-50"
          : "border-indigo-500 bg-white hover:bg-indigo-50"
      }`}
    >
      <div className="flex items-center gap-3 overflow-hidden">
        <button
          onClick={onChecked}
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
          aria-label={isDone ? "Mark as incomplete" : "Mark as complete"}
        >
          <CheckCircle
            className={`h-6 w-6 transition-all ${
              isDone
                ? "text-green-500 fill-green-100"
                : "text-indigo-400 hover:text-indigo-600"
            }`}
          />
        </button>
        <h1
          className={`overflow-hidden text-ellipsis whitespace-nowrap text-lg ${
            isDone ? "text-gray-500 line-through" : "text-gray-800"
          }`}
        >
          {taskname}
        </h1>
      </div>
      <button
        onClick={onDelete}
        className="ml-2 flex-shrink-0 rounded-full p-2 opacity-70 transition-all hover:bg-red-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-300 group-hover:opacity-100"
        aria-label="Delete task"
      >
        <Trash2 className="h-5 w-5 text-red-500" />
      </button>
    </div>
  );
}

export default Task;
