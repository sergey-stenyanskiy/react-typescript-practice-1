import React from 'react'

import classnames from 'classnames'

type TodoProps = {
  todo: Todo,
  actions: TodoActions
}

type TodoState = {
  editName: string,
  editText: string
}

export default class TodoListItem extends React.Component<TodoProps, TodoState> {
// export default class TodoListItem extends React.Component<TodoProps> {
  // editName: React.RefObject<HTMLInputElement>
  // editText: React.RefObject<HTMLInputElement>
  
  constructor(props: TodoProps) {
    super(props);

    this.state = {
      editName: props.todo.name,
      editText: props.todo.text,
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    // this.editName = React.createRef();
    // this.editText = React.createRef();

    this.handleEditNameChange = this.handleEditNameChange.bind(this);
    this.handleEditTextChange = this.handleEditTextChange.bind(this);
  }

  handleEditNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(state => {
      return {
        ...state,
        editName: e.target.value
      };
    });
  }

  handleEditTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(state => {
      return {
        ...state,
        editText: e.target.value
      };
    });
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
    const {editName, editText} = this.state;

    actions.edit(todo.id, {
      // name: this.editName.current!.value,
      name: editName,
      // text: this.editText.current!.value,
      text: editText,
    });
  }


  render() {
    console.log('render');

    const {todo} = this.props;
    const {editName, editText} = this.state;

    const statusClass = classnames("todo-status", `todo-status-${todo.status.split(" ").join("-")}`);

    return (
      <div className="todo-item">
        <div className="todo-id">{todo.id}</div>
        {/* <div className="todo-name">{todo.name}</div> */}
        <input type="text" className="todo-name" id={`todo-name-${todo.id}`} value={editName} onChange={this.handleEditNameChange}/>
        {/* <input type="text" className="todo-name" id={`todo-name-${todo.id}`} defaultValue={todo.name} ref={this.editName}/> */}
        {/* <div className="todo-text">{todo.text}</div> */}
        <input type="text" className="todo-text" id={`todo-text-${todo.id}`} value={editText} onChange={this.handleEditTextChange}/>
        {/* <input type="text" className="todo-text" id={`todo-text-${todo.id}`} defaultValue={todo.text} ref={this.editText}/> */}
        <div className={statusClass}>{todo.status.toUpperCase()}</div>
        <button type="button" onClick={this.handleEdit}>edit</button>
        <button type="button" onClick={this.handleToggle}>toggle</button>
        <button type="button" onClick={this.handleRemove}>remove</button>
      </div>
    );
  }
}