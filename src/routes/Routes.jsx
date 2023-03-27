import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import AOvni from "../views/ovni/AOvni";
import EParanormal from "../views/paranormal/EParanormal";
import MyLegends from "../views/legends/MyLegends";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ovni" element={<AOvni />}></Route>     
                <Route path="/paranormal" element={<EParanormal />}></Route> 
                <Route path="/leyendas" element={<MyLegends />}></Route>      
            </Routes>
        </BrowserRouter>
    );
};

export default Router;