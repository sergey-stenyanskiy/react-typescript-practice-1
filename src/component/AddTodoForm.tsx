import React from 'react'

type AddTodoFormProps = {
  handleAddTodo: (taskData: AddTodoData) => void
}

type AddTodoFormState = {
  taskName: string,
  taskText: string,
}

const initialState: AddTodoFormState = {
  taskName: 'New Task',
  taskText: 'add description',
}

export default class AddTodoForm extends React.Component<AddTodoFormProps, AddTodoFormState> {
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
      name: this.state.taskName,
      text: this.state.taskText,
    });
  }

  handleTodoNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      taskName: e.target.value
    });
  }

  handleTodoTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      ...this.state,
      taskText: e.target.value
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
    const {taskName, taskText} = this.state;

    return (
      <form name="add-task-from" ref={this.form} onSubmit={this.handleSubmit}>
        <label htmlFor="add-task-name">
          Task name:
        </label>
        <input type="text" id="add-task-task-name" value={taskName} onChange={this.handleTodoNameChange} required/>
        <label htmlFor="add-task-text">
          Task description:
        </label>
        <input type="text" id="add-task-task-text" value={taskText} onChange={this.handleTodoTextChange} />
        <button type="submit" >Add new Task</button>
      </form>
    );
  }
}