import React from 'react'

import styles from './AddTodoForm.module.scss'

import {AddTodoData} from "../../types/types"

import TextInput from '../TextInput'

type AddTodoFormProps = {
  handleAddTodo: (taskData: AddTodoData) => void
}

type AddTodoFormState = {
  todoName: string,
  todoText: string,
}

const initialState: AddTodoFormState = {
  todoName: 'New Task',
  todoText: 'add description',
}

export default class AddTodoForm extends React.PureComponent<AddTodoFormProps, AddTodoFormState> {
  private form: React.RefObject<HTMLFormElement>
    
  constructor(props: AddTodoFormProps) {
    super(props);

    this.state = initialState;

    this.form = React.createRef();

    this.handleTodoNameChange = this.handleTodoNameChange.bind(this);
    this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.resetEditState = this.resetEditState.bind(this);
  }

  addTodo() {
    this.props.handleAddTodo({
      name: this.state.todoName,
      text: this.state.todoText,
    });
  }

  handleTodoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      todoName: e.target.value
    });
  }

  handleTodoTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      todoText: e.target.value
    });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.addTodo();
    this.resetEditState();
  }

  resetEditState() {
    this.setState(state => initialState);
  }

  render() {
    const {todoName, todoText} = this.state;

    return (
      <form name="add-todo-from" className={styles["add-todo-form"]} ref={this.form} onSubmit={this.handleSubmit}>
        <TextInput label="Task name:" onChange={this.handleTodoNameChange} value={todoName} id="add-todo-todo-name" required/>
        <TextInput label="Task description:" onChange={this.handleTodoTextChange} value={todoText} id="add-todo-todo-text"/>
        <button type="submit" >Add new Task</button>
      </form>
    );
  }
}