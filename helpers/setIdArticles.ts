import parameterize from "parameterize"

const setIdArticles = (element: string) => {
  const allElements = document.querySelectorAll(element)
  allElements.forEach(node => {
    console.log(node.innerHTML)
    node.setAttribute("id", `${parameterize(node.innerHTML)}`)
  })
}

export default setIdArticles
