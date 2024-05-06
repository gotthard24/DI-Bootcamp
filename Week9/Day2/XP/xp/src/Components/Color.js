import { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState("red");

    useEffect(() =>{
        alert('useEffect reached')
        setFavoriteColor('yellow')
      }, [])

    const changeColor = () =>{
        setFavoriteColor('blue')
    }
    
    return (
        <>
            <p>My Favorite Color is {favoriteColor}</p>
            <button onClick={changeColor}>change color</button>
        </>
    );
}

export default Color;