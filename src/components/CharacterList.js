import { useSelector } from "react-redux";
import Character from "./Character";
import { useDispatch } from "react-redux";
import {
  addCharacter,
  removeCharacter,
} from "../features/characters/characterSlice";

export default function CharacterList() {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters.value);

  if (characters.length > 0) {
    return (
      <div className="md:w-fit flex flex-col md:items-start items-center">
        <h1 className="text-2xl mb-4 pt-2">Your Saved Characters</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {characters.map((data, i) => (
            <div className="group relative w-full h-fit">
              <Character key={i} data={data.data} />
              <button
                className="remove-button left-2 top-2"
                onClick={() => dispatch(removeCharacter(i))}
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return;
}
