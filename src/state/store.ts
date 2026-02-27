export type Filter = "all" | "completed" | "pending"

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export const store = {
  todos: [] as Todo[],
  filter: "all" as Filter,
  
  add(title: string): void {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false
    }

    this.todos.push(newTodo)
  },

  toggle(id: number): void {
    const todo = this.todos.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
  },

  clear(): void {
    this.todos = []
  },

  getFiltered(): Todo[] {
    if (this.filter === "completed") {
      return this.todos.filter(t => t.completed)
    }
    if (this.filter === "pending") {
      return this.todos.filter(t => !t.completed)
    }
    return this.todos
  }
}