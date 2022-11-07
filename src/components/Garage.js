import React from "react";
import Car2 from './Car2'
import './App.css'
const Garage = () => {
    const cars = [
        {id: 1, brand: "Ford"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "Audi"}
    ];
    return (
        <>
            <h1>Essa é a minha Garage</h1>
            <ul>
                {cars.map((car) => <Car2 key={car.id} brand={car.brand}/>)}
            </ul> 
        </>
    );
}
export default Garage