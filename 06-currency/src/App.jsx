// function App() {
//   return (
//     <>
//       <h1 className="text-3xl bg-orange-500">Currency App</h1>
//     </>
//   );
// }

import React, { useEffect, useReducer, useState } from 'react';
import Todo from './components/Todo';

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  REMOVE_TODO: 'remove-todo'
};

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function App(props) {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="w-full h-screen bg-yellow-100 flex justify-center p-7">
      <div className="bg-yellow-200 w-1/2 shadow-md p-7 rounded-xl">
        <div className="mb-2">
          <form className="w-full flex justify-center" action="" onSubmit={handleSubmit}>
            <input
              className="border-2 border-slate-400 rounded-md w-1/2 h-10"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </form>
        </div>
        <div className="flex flex-col items-center">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
