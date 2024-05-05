const Hello = (props) => {
    return(
        <>
            <h1>Hello {props.name}</h1>
            <p>{props.email}</p>
        </>
    )
}

export default Hello