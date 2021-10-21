import TodoStatus from "./TodoStatus"

type Todo = {
  id: number
  text: string
  status: TodoStatus
}

type TodoConfig = {
  id: number
  text?: string
  status?: TodoStatus
}

export default class CTodo implements Todo {
  id: number
  text: string
  status: TodoStatus

  constructor({id = 0, text = '', status = TodoStatus.ACTIVE}: TodoConfig) {
    this.id = id;
    this.text = text;
    this.status = status;
  }

  copyWith({id = this.id, text = this.text, status = this.status}: TodoConfig) {
    return new CTodo({
      id, text, status
    })
  }

  pause() {
    if (this.status === TodoStatus.ACTIVE) {
      this.status = TodoStatus.ON_HOLD;
    }
  }

  resume() {
    if (this.status === TodoStatus.ON_HOLD) {
      this.status = TodoStatus.ACTIVE;
    }
  }

  complete() {
    this.status = TodoStatus.COMPLETED;
  }
}