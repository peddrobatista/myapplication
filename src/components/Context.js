import {useState} from "react";

const Component1 = () => {
    const [user, setUser] = useState("Pedro");

    return (
        <>
            <h1>{`Olá ${user}`}</h1>
            <Component2 user={user}/>
        </>
    );
}
const Component2 = ({user}) => {

    return (
        <>
            <h1>Component2</h1>
            <Component3 user={user}/>
        </>
    );
}
const Component3 = ({user}) => {
    
    return (
        <>
            <h1>Component3</h1>
            <Component4 user={user}/>
        </>
    );
}
const Component4 = ({user}) => {
    
    return (
        <>
            <h1>Component4</h1>
            <Component5 user={user}/>
        </>
    );
}
const Component5 = ({user}) => {
    
    return (
        <>
            <h1>Component5</h1>
            <h2>{`Olá ${user} de novo`}</h2>
        </>
    );
}
export default Component1;