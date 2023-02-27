export default function Character({ data }) {
  return (
    <div className="space-y-2 bg-stone-800 py-8 px-11 rounded-2xl text-stone-300 group relative h-[240px] w-[280px]">
      <h1 className="text-semibold text-xl mb-4 text-yellow-500">
        {data.name}
      </h1>
      <p>height: {data.height} cm</p>
      <p>mass: {data.mass} kg</p>
      <p>hair color: {data.hair_color}</p>
      <p>eye color: {data.eye_color}</p>
    </div>
  );
}
