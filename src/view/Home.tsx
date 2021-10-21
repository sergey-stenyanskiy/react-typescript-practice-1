import React from 'react'

import Todo from '../Todo'
import TodoStatus from '../TodoStatus'

import TodoList from '../component/TodoList'

type HomeProps = {}
type HomeState = {
  todos: Todo[]
}

const initialState: HomeState = {
  todos: [
    new Todo({
      id: 0,
      text: 'wash the desk',
      status: TodoStatus.ACTIVE
    }),
    new Todo({
      id: 1,
      text: 'walk the dog',
      status: TodoStatus.ON_HOLD
    }),
    new Todo({
      id: 2,
      text: 'sleep',
      status: TodoStatus.ON_HOLD
    }),
  ]
}

export default class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = initialState;
  }

  addTask(todo: Todo) {
    this.setState(state => {
      return {
        todos: [...state.todos, todo]
      }
    });
  }

  removeTask(id: number) {
    this.setState(state => {
      return {
        todos: [...state.todos.filter(todo => todo.id !== id)]
      }
    });
  }

  setTask(id: number, todo: Todo) {
    this.setState(state => {
      // state.todos.find(todo => todo.id === id)
      // const idx = state.todos.findIndex(todo => todo.id === id);
      
      // this.
      
      // return {
      //   todos: 
      // }
    })
  }

  render() {
    const {todos} = this.state;

    return (
      <TodoList todos={todos} />
    );
  }
}