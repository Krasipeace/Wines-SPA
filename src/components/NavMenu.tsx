import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <nav className="bg-pink-200 p-1 mt-2">
            <ul className="flex justify-center gap-4 text-2xl font-semibold uppercase">
                <li>
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to={'/wines'} end>Wines</NavLink>
                </li>
            </ul>
        </nav>
    );
}