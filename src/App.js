import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Garage from "./components/Garage";
import Header from "./components/Header";
import MyForm from "./components/Myform";
import Car from "./components/Car";
import Car3 from "./components/Car3";
import Timer from "./components/Timer";
import Component1 from "./components/Context";
import Useref from "./components/Useref";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Garage/>}/>
                    <Route path="header" element={<Header/>}/>
                    <Route path="myform" element={<MyForm/>}/>
                    <Route path="car" element={<Car/>}/>
                    <Route path="car3" element={<Car3/>}/>
                    <Route path="timer" element={<Timer/>}/>
                    <Route path="Components" element={<Component1/>}/>
                    <Route path="Useref" element={<Useref/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;