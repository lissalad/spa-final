import { useSelector } from "react-redux";
import Character from "./Character";

export default function CharacterList() {
  const characters = useSelector((state) => state.characters.value);

  if (characters.length > 0) {
    return (
      <div className="w-fit flex flex-col items-start">
        <h1 className="text-2xl mb-4 pt-2">Your Saved Characters</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {characters.map((data, i) => (
            <Character key={i} data={data.data} />
          ))}
        </div>
      </div>
    );
  }
  return;
}
