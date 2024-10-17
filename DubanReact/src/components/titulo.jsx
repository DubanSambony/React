import { useEffect, useState } from "react";
import { useContext } from "react";
import { counterContext } from "../context/counterContext";

export default function OldNewsPapers() {
const [query, setQuery] = useState ("Periodico viejo");
const [invocations, setInvocations] = useState(1);

const { counter } = useContext(counterContext)

useEffect(() => {
    console.log ("document.title");
    document.title = ` ${query}  `;
}, [query]);

return (
    <>
    <h1>{query || "Periodicos viejos que contienen..."}</h1>
    <p> {invocations} Invocaciones</p>
    <form>
        <input
        type= "text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button
        onClick = {(e) => {
            e.preventDefault();
            setInvocations((prev) => prev + 1);
        }}
        >
            Invocar
        </button>
    </form>
    <div>{ counter }</div>
    
    </>
);
}
