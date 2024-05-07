import React, { useState } from 'react';

const Forms = () => {
    const [username, setUsername] = useState('');
    const [age, setUserAge] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [text, setText] = useState('Initial text here');
    const [selectedCar, setSelectedCar] = useState('Volvo');
    
    let header;
    
    const handleCarChange = (e) => {
        setSelectedCar(e.target.value);
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setUserAge(value);
        if (!/^\d+$/.test(value)) {
            setErrorMessage('Age must be a number.');
        } else {
            setErrorMessage('');
        }
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    if (username && age && !errorMessage) {
        header = <h2>Welcome, {username} {age}!</h2>;
    } else {
        header = null;
    }

    return (
        <div>
            {header}
            <form onSubmit={(e)=> {
                e.preventDefault();
                alert(`You are submitting ${username}`);
            }}>
                <p>Enter Your Name:</p>
                <input onChange={(e) => setUsername(e.target.value)} name='username'></input>
                <p>Enter Your Age:</p>
                <input onChange={handleAgeChange} name='age'></input>
                {<p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type='submit'>submit</button>
                <br></br>
                <textarea value={text} onChange={handleChange} />
                <br></br>
                <select value={selectedCar} onChange={handleCarChange}>
                    <option value="Volvo">Volvo</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Audi">Audi</option>
                </select>
            </form>
        </div>
    );
};

export default Forms;
