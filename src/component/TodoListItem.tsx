import React from 'react'

import Todo from '../Todo'

import classnames from 'classnames'

type TodoProps = {
  todo: Todo
}

export default class TodoListItem extends React.Component<TodoProps> {
  constructor(props: TodoProps) {
    super(props);
  }

  render() {
    const {todo} = this.props;

    const statusClass = classnames("todo-status", `todo-status-${todo.status.split(" ").join("-")}`);

    return (
      <div className="todo-item">
        <div className="todo-id">{todo.id}</div>
        <div className="todo-text">{todo.text}</div>
        <div className={statusClass}>{todo.status.toUpperCase()}</div>
      </div>
    );
  }
}