const Main = () => {

    const user = {
        name: "Pilar",
        age: 26
    }

    const styles = {
        color: "blue"
    }

    return(
        <>
            <h1 style={styles}>{user.name} tiene {user.age} anios</h1>    
        </>
    )
}

export { Main }