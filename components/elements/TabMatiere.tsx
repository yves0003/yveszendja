import AccordionElement from "./Accordion"
import TableOfContent from "./tableOfContent"

const TabMatiere = () => {
  return (
    <div className="pb-3" style={{ gridArea: "tabMatiere" }}>
      <AccordionElement>
        <TableOfContent />
      </AccordionElement>
    </div>
  )
}

export default TabMatiere
