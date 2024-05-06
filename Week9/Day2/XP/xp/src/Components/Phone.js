import { useState } from 'react';

const Phone = () => {
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState(2020);

    const changeColor = () =>{
        setColor('blue')
    }
    
    return (
        <div>
            <h3>My phone is {brand}</h3>
            <p>It is {color} {model} from {year}</p>
            <button onClick={changeColor}>change color</button>
        </div>
    );
}

export default Phone;