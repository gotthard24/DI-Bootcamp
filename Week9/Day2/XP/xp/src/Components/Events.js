import React, { useState } from 'react';

const ClickMe = () => {
    const [isToggleOn, setIsToggleOn] = useState(true);
    const handleKeyDown = (event) =>{
        const inputValue = event.target.value;
        if (event.key === 'Enter') {
            alert(inputValue);
        }
    }
    return(
        <>
            <button onClick={() => alert('I was clicked')}>Click Me!</button>
            <input onKeyDown={handleKeyDown}></input>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>{isToggleOn ? 'On': 'Off'}</button>
        </>
    )
}

export default ClickMe