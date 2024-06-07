import { ChangeEvent, useState } from "react"
import { Wine } from "./types/wine";
import { WINES } from "./data/mock-wines";


export default function App() {
  const [wines, setWines] = useState<Wine[]>(WINES);
  const [selectedWineId, setSelectedWineId] = useState<number | null>(null);

  const selectedWine = wines.find(wine => wine.id === selectedWineId);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedName = event.target.value;

    setWines(prevWines => prevWines.map(wine => {
      if (wine.id === selectedWineId) {
        return { ...wine, name: updatedName }
      }
      return wine;
    }));
  }

  const handleSelectWine = (id: number) => {
    setSelectedWineId(id);
  }

  return (
    <div className="container mt-5 mx-auto">
      <h2 className="text-2xl">My Wines</h2>
      <ul className="flex flex-col gap-2 my-3">
        {wines.map(wine => (
          <li key={wine.id} className="flex cursor-pointer" onClick={() => handleSelectWine(wine.id)}>
            <span className="bg-red-950 text-white rounded-l p-2">{wine.id}</span>
            <span className="p-2 bg-red-100 rounded-r w-1/4">{wine.name}</span>
          </li>
        ))}
      </ul>

      {selectedWine &&
        <>
          <h2 className="text-2xl">Details</h2>
          <div>
            <span className="font-bold">ID:</span> {selectedWine.id}
          </div>
          <div className="space-x-2">
            <span className="font-bold">Name:</span>
            <span className="uppercase">{selectedWine.name}</span>
          </div>
          <div className="flex flex-col gap-2 mt-3 border-t">
            <label>Wine Name:</label>
            <input
              type="text"
              placeholder="Write name of wine here..."
              className="border border-purple-950 rounded-3xl p-2 w-1/4"
              value={selectedWine.name}
              onChange={handleNameChange}
            />
          </div>
        </>}
    </div>
  )
}