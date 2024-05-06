import React, { useState } from 'react';

const Languages = () => {
    const [languages, setLanguages] = useState([
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaScript", votes: 0 },
        { name: "Java", votes: 0 }
    ]);

    const handleVote = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index].votes += 1;
        setLanguages(updatedLanguages);
    };

    return (
        <div>
            {languages.map((item, index) => (
                <div key={index}>
                    {item.votes} {item.name}
                    <button onClick={() => handleVote(index)}>Click Here</button>
                </div>
            ))}
        </div>
    );
};

export default Languages;
