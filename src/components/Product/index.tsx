import Tag from '../Tag'
import { Card, Descricao, Titulo } from './style'
const Product = () => (
  <Card>
    <img src="//place-hold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      obcaecati tenetur incidunt? Voluptatum porro minima architecto
      necessitatibus voluptates quaerat vero amet, impedit.
    </Descricao>
  </Card>
)

export default Product
