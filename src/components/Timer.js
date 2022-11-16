import React, { useState, useEffect } from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // <- adicione colchetes vazios aqui

    return <h1>Eu renderizei {count} vezes! </h1>
}

export default Timer;