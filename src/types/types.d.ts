// declare type Todo = {
//   id: number
//   name: string
//   text: string
//   status: TodoStatus
// }

// declare type TodoData = Partial<TodoData>

// declare type AddTodoData = Pick<TodoData, "name" | "text">

// declare type EditTodoData = AddTodoData

// declare type TodoActions = {
//   toggle: (id: number) => void,
//   remove: (id: number) => void,
//   edit: (id: number, data: EditTodoData) => void,
// }

declare module '*.scss' {
  const content: any;
  export default content;
}
