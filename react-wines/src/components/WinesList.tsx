import { useState, useRef, useEffect } from "react";
import { Wine } from "../types/wine";
import { Link } from "react-router-dom";

const apiURL = import.meta.env.VITE_API_URL;

export default function WinesList() {
	const [wines, setWines] = useState<Wine[]>([]);
	const fetched = useRef(false);

	useEffect(() => {
		if (!fetched.current) {
			fetch(`${apiURL}/wines`).then(res => {
				return res.json();
			}).then(data => {
				setWines(data);
			})
			fetched.current = true;
		}
	}, [])

	return (
		<>
			<h2 className="text-2xl">My Wines</h2>
			<ul className="flex flex-col gap-2 my-3">
				{wines.map(wine => (
					<Link to={`/wines/${wine.id}`} key={wine.id} className="flex cursor-pointer">
						<span className="bg-red-950 text-white rounded-l p-2">{wine.id}</span>
						<span className="p-2 bg-red-100 rounded-r w-full">{wine.name}</span>
					</Link>
				))}
			</ul>
		</>
	)
}