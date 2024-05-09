import React, { useState } from 'react';
import QuoteGenerator from './components/QuoteGenerator';
import NewQuoteButton from './components/NewQuoteButton';

const App = () => {
    const [key, setKey] = useState(0);

    const generateNewQuote = () => {
        setKey(prevKey => prevKey + 1);
    };

    return (
        <div>
            <QuoteGenerator key={key} />
            {/* <NewQuoteButton onClick={generateNewQuote} /> */}
        </div>
    );
}

export default App;
