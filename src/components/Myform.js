import React from "react";
import { useState } from "react";
const MyForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`O nome enviando foi: ${name}`)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label> Digite seu nome: 
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit"/>
        </form>
    )
}
export default MyForm