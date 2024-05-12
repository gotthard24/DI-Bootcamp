import "./App.css";
import { useState, createContext } from "react";
import CharacterCounter from "./components/CharacterCounter";

export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppContext.Provider value={{ count, setCount }}>
        <CharacterCounter />
      </AppContext.Provider>
    </div>
  );
}

export default App;
