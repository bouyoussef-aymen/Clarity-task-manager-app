import { store, type Filter } from "../state/store"

export function createSidebar(onUpdate: () => void): HTMLElement {
  const sidebar = document.createElement("aside")
  sidebar.className = "sidebar"

  const title = document.createElement("h2")
  title.textContent = "Filters"
  sidebar.appendChild(title)

  const filters: Filter[] = ["all", "completed", "pending"]

  filters.forEach(f => {
    const btn = document.createElement("button")
    btn.textContent = f
    btn.className = `sidebar-filter ${store.filter === f ? "active" : ""}`

    btn.addEventListener("click", () => {
      store.filter = f
      onUpdate()
    })

    sidebar.appendChild(btn)
  })

  const stats = document.createElement("div")
  stats.className = "sidebar-stats"

  const total = store.todos.length
  const completed = store.todos.filter(t => t.completed).length
  const active = total - completed

  stats.innerHTML = `
    <p><strong>Total:</strong> ${total}</p>
    <p><strong>Active:</strong> ${active}</p>
    <p><strong>Completed:</strong> ${completed}</p>
  `

  sidebar.appendChild(stats)

  const clearBtn = document.createElement("button")
  clearBtn.className = "clear-btn"
  clearBtn.textContent = "Clear All"

  clearBtn.addEventListener("click", () => {
    store.clear()
    onUpdate()
  })

  sidebar.appendChild(clearBtn)

  return sidebar
}