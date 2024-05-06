import {useState} from 'react'
import Garage from './Garage'

const Car = (props) => {
    const [color, setColor] = useState('White')
    return (
        <header>
            <p>This car is {color} {props.model}</p>
            <Garage size='small'/>
        </header>
    )
}

export default Car