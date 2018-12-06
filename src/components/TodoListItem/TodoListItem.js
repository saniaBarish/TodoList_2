import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, important, done, onDelete, onItemDone, onToggleImportant}) =>{

  const className = (done = false, important = false) =>{
    if (done && important){
      return "todo-list-item done important"
    }
    else if (done){
      return "todo-list-item done"
    }
    else if (important){
      return "todo-list-item important"
    }
    else return "todo-list-item"
  }


  return (
    <span className={className(done, important)}>
      <span
        className="todo-list-item-label"
        onClick={onItemDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;