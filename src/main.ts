// @ts-ignore
import "./styles/main.scss"
import { store } from "./state/store"
import { createSidebar } from "./components/sideBar"
import { createTodoItem } from "./components/todoItem"
import { inputForm } from "./components/inputForm"

const app = document.getElementById("app") as HTMLElement

function render(): void {
  app.innerHTML = ""

  const layout = document.createElement("div")
  layout.className = "layout"

  const sidebar = createSidebar(render)

  const main = document.createElement("main")
  main.className = "main-content"

  const header = document.createElement("header")
  header.innerHTML = "<h1>Todo Manager</h1>"

  const inputform = inputForm((value: string) => {
    store.add(value)
    render()
  })
  
  const list = document.createElement("div")
  list.className = "todo-list"

  store.getFiltered().forEach(todo => {
    list.appendChild(
      createTodoItem(todo, () => {
        store.toggle(todo.id)
        render()
      })
    )
  })

  main.appendChild(header)
  main.appendChild(inputform)
  main.appendChild(list)

  layout.appendChild(sidebar)
  layout.appendChild(main)

  app.appendChild(layout)
}

async function init(): Promise<void> {
  render()
}

init()