import React from "react";

const Football = () => {
    const shoot = (a, b) => {
        alert(b.type);
    }

    return (
        <button onClick={(event) => shoot("Gooalll!!", event)}>Take the shot!</button>
    );
}

export default Football;