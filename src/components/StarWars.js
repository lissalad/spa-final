import { useState } from "react";
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
        <div className="group relative w-full h-fit">
          <Character data={data} />
          <button
            onClick={() => dispatch(addCharacter({ data }))}
            className="invisible group-hover:visible hover:bg-stone-900 absolute top-4 right-4 text-md text-yellow-500 bg-stone-700 px-4 py-1.5 rounded-lg"
          >
            +
          </button>
        </div>
      );
  }

  return (
    <div className="flex flex-col items-start min-w-[300px]">
      <form onSubmit={(e) => fetchCharacter(e)} className="w-full mb-4">
        <input
          onChange={(e) => setID(e.target.value)}
          value={id}
          type="text"
          placeholder="search character id"
          className="rounded-l-lg px-4 py-2 text-black"
        />
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg">
          search
        </button>
      </form>
      {getSearchResults()}
    </div>
  );
}
