import React, { useRef } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function CharacterCounter() {
    const inputRef = useRef(null);
    const {count, setCount} = useContext(AppContext)
  
    const handleInputChange = () => {
      const textLength = inputRef.current.value.length;
      setCount(textLength)
      console.log(textLength);
    };
  
    return (
      <div>
        <h1>Character Counter</h1>
        <textarea
          ref={inputRef}
          onChange={handleInputChange}
          placeholder="Type something..."></textarea>
        <p>Character Count: {count}</p>
      </div>
    );
  }

  export default CharacterCounter