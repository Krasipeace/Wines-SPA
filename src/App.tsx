import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Messages from "./components/Messages";
import NavMenu from "./components/NavMenu";

export default function App() {
	return (
		<>
			<h1 className="text-4xl text-red-800 font-bold text-center">Wines</h1>

			<NavMenu />

			<div className="mt-5 container mx-auto flex justify-between gap-6">
				<div className="flex-1">
					<Outlet />
				</div>
				<div className="flex-1">
					<Messages />
				</div>
			</div>

			<Footer />
		</>
	)
}