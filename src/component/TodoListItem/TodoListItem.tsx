import React from 'react'

import classnames from 'classnames'

import {Todo, TodoActions} from "../../types/types"

import styles from './TodoListItem.module.scss'

import Button from '../Button'

type TodoProps = {
  todo: Todo,
  actions: TodoActions
}

export default class TodoListItem extends React.PureComponent<TodoProps> {
  editName: React.RefObject<HTMLInputElement>
  editText: React.RefObject<HTMLInputElement>
  
  constructor(props: TodoProps) {
    super(props);
    
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.editName = React.createRef();
    this.editText = React.createRef();
  }

  handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    const {todo, actions} = this.props;
    
    actions.toggle(todo.id);
  }

  handleRemove(e: React.MouseEvent<HTMLButtonElement>) {
    const {todo, actions} = this.props;
    
    actions.remove(todo.id);
  }

  handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    const {todo, actions} = this.props;

    actions.edit(todo.id, {
      name: this.editName.current!.value,
      text: this.editText.current!.value,
    });
  }


  render() {
    const {todo} = this.props;

    const statusClass = classnames(styles["todo-status"], `todo-status-${todo.status.split(" ").join("-")}`);

    return (
      <div className={styles["todo-item"]}>
        Task:
        <div style={{marginBottom: "4px"}} />
        <div className={styles["todo-item-content"]}>
          <div className="todo-id">id: {todo.id}</div>
          <input type="text" className={styles["todo-name"]} id={`todo-name-${todo.id}`} defaultValue={todo.name} ref={this.editName}/>
          <input type="text" className={styles["todo-text"]} id={`todo-text-${todo.id}`} defaultValue={todo.text} ref={this.editText}/>
          <div className={statusClass}>{todo.status.toUpperCase()}</div>
          <Button onClick={this.handleEdit}>/ edit</Button>
          <Button onClick={this.handleToggle}>+ toggle</Button>
          <Button onClick={this.handleRemove}>x remove</Button>
        </div>
      </div>
    );
  }
}