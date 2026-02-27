import type { Todo } from "../state/store"

export function createTodoItem(
  todo: Todo,
  onToggle: () => void
): HTMLElement {

  const item = document.createElement("div")
  item.className = `todo-item ${todo.completed ? "done" : ""}`

  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.checked = todo.completed
  checkbox.addEventListener("change", onToggle)

  const text = document.createElement("span")
  text.textContent = todo.title

  item.appendChild(checkbox)
  item.appendChild(text)

  return item
}