const TarjetaGato = ({ gato }) => {

    const { colores, img, name, sexo, shortDesc } = gato

    return(
        <div>
            <h1>{name}</h1>
            <img src={img} width="200px" />
            <p>{shortDesc}</p>
            <p>Genero: {sexo === "h" ? "Hembra" : "Macho"}</p>
            <p>Colores: {colores.join(", ")}</p>
        </div>
    )
}

export { TarjetaGato }