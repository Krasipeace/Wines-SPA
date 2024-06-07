import { ChangeEvent, useState } from "react"
import { Wine } from "./types/wine";
import { WINES } from "./data/mock-wines";
import WineDetails from "./components/WineDetails";


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

      <WineDetails wine={selectedWine} onChangeName={handleNameChange} />
    </div>
  )
}