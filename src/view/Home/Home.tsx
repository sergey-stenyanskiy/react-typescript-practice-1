import React from 'react'

import TodoStatus from '../../TodoStatus'

import Button from '../../component/Button'
import TodoList from '../../component/TodoList/TodoList'
import AddTaskForm from '../../component/AddTodoForm/AddTodoForm'

import { genId } from '../../util/idGenerator'

import styles from './Home.module.scss'

import {Todo, TodoData, EditTodoData, AddTodoData} from "../../types/types"


type HomeProps = {}
type HomeState = {
  todos: Todo[]
}

const initialState: HomeState = {
  todos: []
}

export default class Home extends React.PureComponent<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    this.state = initialState;

    this.filterTodos = this.filterTodos.bind(this);
    this.mapTodos = this.mapTodos.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.setTodo = this.setTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.completeAllTodos = this.completeAllTodos.bind(this);
    this.removeCompleted = this.removeCompleted.bind(this);
  }

  filterTodos(predicate: (todo: Todo) => boolean) {
    this.setState(state => {
      return {
        todos: state.todos.filter(predicate)
      }
    });
  }

  mapTodos(mapfun: (todo: Todo, index: number) => Todo) {
    this.setState(state => {
      return {
        todos: state.todos.map(mapfun)
      }
    });
  }

  addTodo(data: AddTodoData) {
    const newTodo: Todo = {
      id: genId.next(),
      status: TodoStatus.ACTIVE,
      ...data
    }

    this.setState(state => {
      return {
        todos: [...state.todos, newTodo]
      }
    });
  }

  editTodo(id: number, data: EditTodoData) {
    this.setTodo(id, data);
  }

  removeTodo(id: number) {
    this.filterTodos(todo => todo.id !== id);
  }

  getTodo(id: number) {
    return this.state.todos.find(todo => todo.id === id);
  }

  setTodo(id: number, data: TodoData) {
    this.mapTodos(todo => {
      if (todo.id === id) {
        return {...todo, ...data};
      }

      return todo
    });
  }

  toggleTodo(id: number) {
    this.mapTodos(todo => {
      if (todo.id === id) {
        const status = todo.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;

        return {
          ...todo,
          status
        }
      }

      return todo;
    });
  }

  completeTodo(id: number) {
    this.setTodo(id, {
      status: TodoStatus.COMPLETED
    });
  }

  completeAllTodos() {
    this.mapTodos(todo => ({...todo, status: TodoStatus.COMPLETED}));
  }

  removeCompleted() {
    this.filterTodos(todo => todo.status !== TodoStatus.COMPLETED);
  }

  render() {
    const {todos} = this.state;

    const actions = {
      remove: this.removeTodo,
      toggle: this.toggleTodo,
      edit: this.editTodo,
    }

    return (
      <main className={styles.main}>
        <TodoList todos={todos} actions={actions}  />
        <AddTaskForm handleAddTodo={this.addTodo}/>
        <div className="actions">
          <Button onClick={this.completeAllTodos}>All completed</Button>
          <Button onClick={this.removeCompleted}>Remove Completed</Button>
        </div>
      </main>
    );
  }
}