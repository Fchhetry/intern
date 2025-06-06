import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]); // function to update array

  const addTodo = () => { //functional form to get the latest state
    setTodos((t) => [...t, "New Todo"]); //create nre array
  };

  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, idx) => ( //loops over each string in todo
        <p key={idx}>{todo}</p> //give key
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
}
