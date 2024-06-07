import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Wine } from "../types/wine";
import { useParams } from "react-router-dom";
import { useMessages } from "../context/MessageContext";

const apiUrl = import.meta.env.VITE_API_URL;

export default function WineDetails() {
	const [wine, setWine] = useState<Wine | null>(null);
	const params = useParams();
	const fetched = useRef(false);
	const { addMessage } = useMessages();

	useEffect(() => {
		if (!fetched.current) {
			fetch(`${apiUrl}/wines/${params.id}`).then(res => {
				return res.json();
			}).then(data => {
				setWine(data);
				addMessage(`Wine ${data.name} loaded.`);
			})
			fetched.current = true;
		}
	}, [params.id, addMessage])

	if (!wine) return null;

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setWine({ ...wine, name: event.target.value });
	}

	return (
		<>
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
					className="border border-purple-950 rounded-3xl p-2 w-2/3"
					value={wine.name}
					onChange={handleNameChange}
				/>
			</div>
		</>
	)
}
