import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import StarWars from "./components/StarWars";
import CharacterList from "./components/CharacterList";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App space-y-4 py-4 w-full">
      <Home />
      <div className="flex flex-row justify-evenly items-start md:pt-16 pt-12 space-y-6 md:space-y-0 md:flex-nowrap gap-4 flex-wrap">
        <StarWars />
        <CharacterList />
      </div>
    </div>
  );
}

export default App;
