import './Users.css'
import Button from '@mui/material/Button';

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
            <img src={`https://robohash.org/${props.info.id}?size=200x200`}/>
            <h2>{props.info.name}</h2>
            <h3>{props.info.username}</h3>
            <p>{props.info.email}</p>
            <Button variant="contained">Woof</Button>
        </div>
    )
}

export default User