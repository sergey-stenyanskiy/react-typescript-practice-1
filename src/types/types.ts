import TodoStatus from "../TodoStatus"

export type Todo = {
  id: number
  name: string
  text: string
  status: TodoStatus
}

export type TodoData = Partial<Todo>

export type AddTodoData = Pick<Todo, "name" | "text">

export type EditTodoData = AddTodoData

export type TodoActions = {
  toggle: (id: number) => void,
  remove: (id: number) => void,
  edit: (id: number, data: EditTodoData) => void,
}