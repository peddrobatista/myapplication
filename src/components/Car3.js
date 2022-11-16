import React, {useState} from "react";
// Utilização de Hooks
const Car3 = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "Red",
        year: "1964"
    });

    const changeColor = () => {
        setCar(previousState => {
            return {...previousState, color: "Blue"}
        });
    }

    return (
        <>
            <h1>Esse é meu {car.brand}</h1>
            <p>
                que é {car.color}, {car.model} do ano de {car.year}.
            </p>
            <button type="button" onClick={changeColor}>Blue</button> 
        </>
    );
}

export default Car3;