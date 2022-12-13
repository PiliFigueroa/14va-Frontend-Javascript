import styled from 'styled-components'

const Encabezado = styled.h3`
    text-align: center;
    color: #000;
    margin: 10px 0;
    border-radius: 5px;
    font-weight: bold;
`;

const CardContainer = styled.div`
    border: 1px solid #c2c2c2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Parrafo = styled.p`
    text-align: center;
    font-size: 1em;
`;

const Boton = styled.button`
    background-color: ${props => props.color};
    padding: 5px ${props => props.isLarge ? "30px" : "10px"};
    text-align: center;
    border-radius: 5px;
    color: #fff;
    &:hover {
        background-color: #d83a7b;
    }
`;

export { Boton, Parrafo, CardContainer, Encabezado }