import { useState, useEffect } from "react";
import quotes from "../assets/quotes";

const QuoteGenerator = () => {
    const [color, setColor] = useState({});
    const [quotesData, setQuoteData] = useState([]);
    const [random, setRandom] = useState(0);

    const randColor = () => {
        let randColor1 = Math.floor(Math.random() * 256);
        let randColor2 = Math.floor(Math.random() * 256);
        let randColor3 = Math.floor(Math.random() * 256);
        return { 
            color: `rgb(${randColor1},${randColor2},${randColor3})`, 
            color1: randColor1,
            color2: randColor2,
            color3: randColor3
        };
    };

    const generateQuote = () => {
        let randIndex = 0;
        do {
            randIndex = Math.floor(Math.random() * quotes.length);
        } while (randIndex === random);
        setRandom(randIndex);
        setQuoteData(quotes);
        const newColor = randColor();
        setColor(newColor);
        document.body.style.backgroundColor = `rgb(${newColor.color1},${newColor.color2},${newColor.color3})`;
    };

    useEffect(() => {
        generateQuote();
    }, []); 

    return (
        <>
            <div id="quoteframe">
                <h1 style={{ color: color.color }}>{quotesData[random]?.quote}</h1>
                <p style={{ color: color.color }}>{quotesData[random]?.author || "Unknown"}</p>
                <button onClick={generateQuote} style={{ background: `rgb(${color.color1},${color.color2},${color.color3})`, color: 'white' }}>New quote</button>
            </div>
        </>
    );
};

export default QuoteGenerator;
