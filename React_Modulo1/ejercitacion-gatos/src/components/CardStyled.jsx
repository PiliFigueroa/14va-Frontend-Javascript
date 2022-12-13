import { Boton, Parrafo, CardContainer, Encabezado } from './Styled'

const CardStyled = ({ title, type, price, img, rating, isAvailable, onSale }) => {

    return(
        <CardContainer>
            <Encabezado>{title}</Encabezado>
            <img src={img} />
            <Parrafo>${price}</Parrafo>
            <Boton isLarge color="#d83a7b">Boton Largo</Boton>
            <Boton color="#3dad2e">Boton Normal</Boton>
        </CardContainer>
    )
}

export { CardStyled }