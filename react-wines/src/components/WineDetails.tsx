import { ChangeEvent } from "react";
import { Wine } from "../types/wine";

type Props = {
  wine?: Wine;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function WineDetails(props: Props) {
  if (!props.wine) return null;

  return (
    <>
      <h2 className="text-2xl">Details</h2>
      <div>
        <span className="font-bold">ID:</span> {props.wine.id}
      </div>
      <div className="space-x-2">
        <span className="font-bold">Name:</span>
        <span className="uppercase">{props.wine.name}</span>
      </div>
      <div className="flex flex-col gap-2 mt-3 border-t">
        <label>Wine Name:</label>
        <input
          type="text"
          placeholder="Write name of wine here..."
          className="border border-purple-950 rounded-3xl p-2 w-1/4"
          value={props.wine.name}
          onChange={props.onChangeName}
        />
      </div>
    </>
  )
}
