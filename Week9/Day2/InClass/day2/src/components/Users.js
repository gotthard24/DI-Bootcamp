const User = (props) => {
    let style = {
        display: 'inline-block',
        border: '1px solid #000',
        margin: '20px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: 'cyan'
    }
    return (
        <div className='userinfo'>
            <img src={`https://robohash.org/${props.id}?size=200x200`}/>
            <h2>{props.name}</h2>
            <h3>{props.username}</h3>
            <p>{props.email}</p>
        </div>
    )
}

export default User