import { useEffect, useRef, useState } from "react";
import { Wine } from "../types/wine";
import { Link } from "react-router-dom";

export default function Dashboard() {
	const [wines, setWines] = useState<Wine[]>([]);

	const fetched = useRef(false);

	useEffect(() => {
		if (!fetched.current) {
			fetch('http://localhost:3000/wines?_limit=4').then(res => {
				return res.json();
			}).then(data => {
				setWines(data);
			})
			fetched.current = true;
		}
	}, [])

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-2xl">Top Wines</h2>
			<div className="flex gap-3">
				{wines.map(wine => (
					<Link key={wine.id} to={`/wines/${wine.id}`} className="p-4 cursor-pointer bg-purple-950 text-white rounded-lg">
						{wine.name}
					</Link>
				))}
			</div>
		</div>
	)
}