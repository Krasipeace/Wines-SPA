import { ChangeEvent, useState } from "react"

type Wine = {
  id: number;
  name: string;
}

export default function App() {
  const [wine, setWine] = useState<Wine>({ id: 1, name: 'Mavrud' });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWine({ ...wine, name: event.target.value })
  }

  return (
    <div className="container mt-5 mx-auto">
      <h2 className="text-2xl">Details</h2>
      <div>
        <span className="font-bold">ID:</span> {wine.id}
      </div>
      <div className="space-x-2">
        <span className="font-bold">Name:</span>
        <span className="uppercase">{wine.name}</span>
      </div>
      <div className="flex flex-col gap-2 mt-3 border-t">
        <label>Wine Name:</label>
        <input
          type="text"
          placeholder="Write name of wine here..."
          className="border border-purple-950 rounded-3xl p-2 w-1/4"
          value={wine.name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  )
}