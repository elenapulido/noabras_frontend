import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import MyLegends from "../views/legends/MyLegends";
import Formular from "../components/form/Formular";
import BodyView from "../components/body/BodyView";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>                
                <Route path="/formulario" element={<Formular />}></Route> 
                <Route path="/leyendas" element={<BodyView />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
