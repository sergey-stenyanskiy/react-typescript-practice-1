import React from 'react'

import TodoListItem from './TodoListItem'

import styles from '../css/TodoList.module.scss'

type TodoListProps = {
  todos: Todo[],
  actions: TodoActions
}

export default class TodoList extends React.PureComponent<TodoListProps> {
  constructor(props: TodoListProps) {
    super(props);
  }

  render() {
    const {todos, actions} = this.props;

    const content = todos.length > 0 ? todos.map((todo, i) => <TodoListItem key={i} todo={todo} actions={actions} />) : "No tasks" 

    return (
      <div className={styles["todo-list"]}>
        {content}
      </div>
    );
  }
}