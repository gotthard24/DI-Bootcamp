import React from 'react'
import './Exercise.css'

class Exercise extends React.Component{
    render(){
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };

        return(
        <div>
            <h1 style={style_header}>This is h1 tag</h1>
            <p className='para'>This is a paragraph.</p>
            <a href="#">This is a link</a>
            <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*50coYPiud3mE8e3G.png" alt="An image" />
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
        </div>
        )
    }
}

export default Exercise;