import { useState } from "react";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { addCharacter } from "../features/characters/characterSlice";
import Character from "./Character";

export default function StarWars() {
  const dispatch = useDispatch();

  const [id, setID] = useState("");
  const [data, setData] = useState({});

  async function fetchCharacter(e) {
    e.preventDefault();
    const path = `https://swapi.dev/api/people/${id}`;

    const res = await fetch(path);
    const json = await res.json();
    setData(json);
  }

  function getSearchResults() {
    if (data.name)
      return (
        <div className="group relative h-fit">
          <Character data={data} />
          <button
            onClick={() => dispatch(addCharacter({ data, id: uniqid() }))}
            className="add-button right-2 top-2"
          >
            +
          </button>
        </div>
      );
  }

  return (
    <div className="flex flex-col items-start border-yellow-600 border-4 p-6 rounded-xl">
      <form
        onSubmit={(e) => fetchCharacter(e)}
        className=" mb-4 whitespace-nowrap "
      >
        <input
          onChange={(e) => setID(e.target.value)}
          value={id}
          type="text"
          placeholder="search character id"
          className="rounded-l-lg px-4 py-2 text-black"
        />
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg hover:bg-yellow-600 smooth">
          search
        </button>
      </form>
      {getSearchResults()}
    </div>
  );
}
