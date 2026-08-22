import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoThunk,
  removeTodo,
  toggleTodo,
} from "../redux/slices/todoSlice.js";

function TodoApp() {
  const [input, setInput] = React.useState("");
  const [filter, setFilter] = React.useState("all");

  const dispatch = useDispatch();

  const { todo, isPending, isRejected, error } = useSelector(
    (state) => state.todo
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(
      createTodoThunk({
        id: Date.now(),
        title: input,
        completed: false,
      })
    );
    setInput("");
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const filteredTodo = todo.filter((item) => {
    if (filter === "active") {
      return !item.completed;
    }

    if (filter === "completed") {
      return item.completed;
    }

    return true;
  });

  const activeTodo = todo.filter((item) => !item.completed).length;

  return (
    <main className="min-h-screen bg-orange-50 px-4 py-10">
      <section className="mx-auto w-full max-w-xl">
        <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
          <form
            onSubmit={handleSubmit}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new task..."
              disabled={isPending}
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={isPending}
              className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
            >
              {isPending ? "Adding..." : "Add"}
            </button>
          </form>
          {isRejected && (
            <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500">
              {error || "Something went wrong"}
            </p>
          )}
          <div className="mt-6 flex gap-2 border-b border-gray-100 pb-4">
            {["all", "active", "completed"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-4 py-2 text-sm font-medium capitalize ${
                  filter === item
                    ? "bg-orange-500 text-white"
                    : "text-gray-500 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="">

            {filteredTodo.length > 0 ? (
              filteredTodo.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 py-4"
                >
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                      item.completed
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {item.completed && (
                      <span className="text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                  <p
                    className={`flex-1 text-sm ${
                      item.completed
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg px-3 py-1.5 text-sm text-gray-400 hover:bg-red-50 hover:text-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))
            ) : (
              <div className="py-10 text-center">
                <p className="font-medium text-gray-700">
                  No tasks found
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Add a task to get started.
                </p>
              </div>
            )}

          </div>
          <div className="mt-2 border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-400">
              {activeTodo}{" "}
              {activeTodo === 1 ? "task" : "tasks"} remaining
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TodoApp;
