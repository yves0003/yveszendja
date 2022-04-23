const getNestedHeadings = (headingElements: Element[]) => {
  const nestedHeadings: {
    id: string
    title: string
    items: {
      id: string
      title: string
    }[]
  }[] = []
  headingElements.forEach((heading, index) => {
    const { innerHTML: title, id } = heading
    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      })
    }
  })
  return nestedHeadings
}

export default getNestedHeadings
