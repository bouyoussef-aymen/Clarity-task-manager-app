import type { Todo } from "../state/store"

export async function fetchTodos(): Promise<Todo[]> {
  return [
    { id: 1, title: "Learn TypeScript", completed: false },
  ]
}