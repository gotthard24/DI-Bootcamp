import quotes from "../assets/quotes";
import { useState } from "react";

const QuoteGenerator = () => {
    const [quotes2, setQuotes] = useState(quotes);

    const getRandInt = () => {
        let randIndex = Math.floor(Math.random() * quotes.length)
        return randIndex
    }

    const index = getRandInt()

    return (
        <div id="quoteframe"> 
            {console.log(quotes2)}
            <h1>{quotes2[index].quote}</h1>
            {quotes2[index].author === '' ? (
                <p>Unknown</p>
            ) : (
                <p>{quotes2[index].author}</p>
            )}
        </div>
    );
};

export default QuoteGenerator;
