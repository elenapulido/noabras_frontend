import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import MyLegends from "../views/legends/MyLegends";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/leyendas" element={<MyLegends />}></Route>      
            </Routes>
        </BrowserRouter>
    );
};

export default Router;