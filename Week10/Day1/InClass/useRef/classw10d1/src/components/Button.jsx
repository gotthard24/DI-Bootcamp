import { useContext } from "react";
import { AppContext } from "../App";
import ButtonTwo from "./Button Two";

const Button = (props) => {
    const {count, setCounter} = useContext(AppContext)
    return (
        <>
            <h3>Button</h3>
            <button onClick={() => setCounter(count + 1)}>+</button>
            <ButtonTwo/>
        </>
    );
  }
  
  export default Button;