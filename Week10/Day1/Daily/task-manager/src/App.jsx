import React, { useReducer, useState } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case "REMOVE_TODO":
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id);
    case "EDIT_TASK":
      // Edit a todo by its id
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case "TOGGLE_COMPLETED":
      // Toggle completion status of a todo by its id
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [completedTodos, setCompleted] = useState(0);
  const [todoText, setTodoText] = useState("");
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState("");
  const [filter, setFilter] = useState("all");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id) => {
    setEditingTodoId(id);
    const editedTodo = todos.find((todo) => todo.id === id);
    setEditedTodoText(editedTodo.text);
  };

  const handleSaveTodo = () => {
    dispatch({ type: "EDIT_TASK", id: editingTodoId, text: editedTodoText });
    setEditingTodoId(null);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditedTodoText("");
  };

  const handleToggleCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETED", id });
    setCompleted((prevCount) => prevCount + (todos.find(todo => todo.id === id).completed ? -1 : 1));
  };

  const handleFilterTasks = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button> <hr />
      <div>
        <button onClick={() => handleFilterTasks("all")}>Show All</button>
        <button onClick={() => handleFilterTasks("completed")}>Show Completed</button>
        <button onClick={() => handleFilterTasks("active")}>Show Active</button>
      </div> <hr />
      {filter === "all" ? (
        <h2>Current tasks: {todos.length}</h2>
      ) : filter === "completed" ? (
        <h2>Completed tasks: {completedTodos}</h2>
      ) : (
        <h2>Active tasks: {todos.length - completedTodos}</h2>
      )}
      <ul>
        {todos
          .filter((todo) =>
            filter === "all"
              ? true
              : filter === "completed"
              ? todo.completed
              : !todo.completed
          )
          .map((todo) => (
            <li key={todo.id}>
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editedTodoText}
                    onChange={(e) => setEditedTodoText(e.target.value)}
                    autoFocus // Automatically focus on input field
                  />
                  <button onClick={handleSaveTodo}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                  >
                    {todo.text}
                  </span>
                  <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                  <button onClick={() => handleToggleCompleted(todo.id)}>
                    {todo.completed ? "Undo" : "Complete"}
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
