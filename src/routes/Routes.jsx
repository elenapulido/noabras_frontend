import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import AOvni from "../views/AOvni";
import EParanormal from "../views/EParanormal";
import MyLeyendas from "../views/MyLeyendas";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/ovni" element={<AOvni />}></Route>     
                <Route path="/paranormal" element={<EParanormal />}></Route> 
                <Route path="/leyendas" element={<MyLeyendas />}></Route>      
            </Routes>
        </BrowserRouter>
    );
};

export default Router;