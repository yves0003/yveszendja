import styled from "styled-components"
import ButtonSubscribe from "../elements/ButtonSubscribe"

const Newsletter = styled.div`
  width: 100%;
  border: solid 1px var(--surface2);
  background-color: hsla(var(--brand-hsl) / 0.1);
  small {
    color: var(--text2);
  }
`

const Subscribe = () => {
  return (
    <Newsletter className="p-3 br-2 mt-6 mb-2">
      <div>
        <h6>Rejoignez ma newsletter</h6>
        <div className="mb-3">Soyez informé des nouveaux articles.</div>
        <div>
          <small>Pas de spams!</small>
        </div>
        <div>
          <ButtonSubscribe action="" />
        </div>
      </div>
    </Newsletter>
  )
}

export default Subscribe
