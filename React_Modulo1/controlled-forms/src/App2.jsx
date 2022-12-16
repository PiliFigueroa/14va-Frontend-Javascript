import { Input } from './components/Input'

const App2 = () => {
    return(
        <>
            <Input type={"text"} placeholder={"Ingrese su nombre"} />
            <Input type={"email"} placeholder={"Ingrese su email"} />
            <Input type={"date"} />
            <Input textarea placeholder={"Descripcion"} />
            <Input type={"submit"} isSubmit text="Enviar Datos" />
        </>
    )
}

export { App2 }