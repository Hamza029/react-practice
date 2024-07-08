import React from 'react';

import { ACTIONS } from '../App';

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="bg-yellow-300 mt-2 w-1/2 p-2 rounded-md flex justify-between">
      <span className={`text-slate-700 ${todo.complete ? 'line-through' : ''} overflow-auto`}>
        {todo.name}
      </span>
      <div>
        <button
          className="mr-2"
          onClick={(e) => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
          ✔️
        </button>
        <button onClick={(e) => dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Todo;
