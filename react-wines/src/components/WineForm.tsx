import { FormEvent } from "react";
import { Wine } from "../types/wine";
import { useMessages } from "../context/MessageContext";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

type Props = {
    wine?: Wine;
    setWine?: (wine: Wine) => void;
}

export default function WineForm({ wine, setWine }: Props) {
    const { addMessage } = useMessages();
    const navigate = useNavigate();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const url = wine ? `${apiUrl}/wines/${wine.id}` : `${apiUrl}/wines`;
        const method = wine ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify({ name: formData.get("name") })
            });

            if (!response.ok) throw new Error("Request failed: " + response.statusText);

            const data = await response.json();
            const message = wine ? `Wine ${wine.name} updated to ${data.name}` : `Wine ${data.name} created`;
            addMessage(message);
            wine && setWine ? setWine(data) : navigate(`/wines/${data.id}`);
        } catch (error) {
            console.log("Failed to update wine");
        }
    }

    return (
        <div className="mt-3">
            <h2 className="text-2xl">{wine ? "Edit Wine" : "Create Wine"}</h2>
            <form onSubmit={onSubmit}>
                <label>Wine Name:</label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Write name of wine here..."
                        className="border border-purple-950 rounded-3xl p-2 w-2/3"
                        defaultValue={wine?.name || ""}
                    />
                    <button type="submit" className="btn">
                        {wine ? "Update" : "Create"}
                    </button>
                </div>
            </form>
        </div>
    )
}