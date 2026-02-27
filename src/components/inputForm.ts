export function inputForm(onUpdate: (value: string) => void) {
  const inputform = document.createElement("div")
  inputform.className = "input-form"

  const input = document.createElement("input")
  input.className = "input-field"
  input.type = "text"
  input.placeholder = "Enter your task here..."

  const button = document.createElement("button")
  button.className = "add-btn"
  button.type = "button"
  button.textContent = "Add"

  button.addEventListener("click", () => {
    const value = input.value.trim()
    if (!value) return

    onUpdate(value)
    input.value = ""
  })

  inputform.append(input, button)

  return inputform
}