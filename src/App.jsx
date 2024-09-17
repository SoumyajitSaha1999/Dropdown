import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dropdown from "./Components/Dropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Dropdown />
      </div>
    </>
  );
}

export default App;
