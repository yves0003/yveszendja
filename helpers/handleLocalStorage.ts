export const handleLocalStorage = (
  action: "add" | "remove" | "update" | "get",
  itemName: string,
  itemValue?: string
) => {
  if (action === "add" && itemValue) {
    localStorage.setItem(itemName, itemValue)
  } else if (action === "remove") {
    localStorage.removeItem(itemName)
  } else if (action === "update" && itemValue) {
    localStorage.setItem(itemName, itemValue)
  } else if (action === "get") {
    const val = localStorage.getItem(itemName)
    return val
  }
}
