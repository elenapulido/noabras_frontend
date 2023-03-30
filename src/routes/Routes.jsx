import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/home/Home";
import Histories from "../views/histories/Histories";
import MyLegends from "../views/legends/MyLegends";
import FormEdit from "../views/formEdit/FormEdit";
<<<<<<< HEAD
import Psychofony from "../views/psychofonies/Psychofony";
=======
import Histories from "../views/histories/Histories"
import Psychophonie from "../views/psychophonie/Psychophonie";

>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/leyendas" element={<MyLegends />}></Route>    
                <Route path="/historias" element={<Histories />}></Route>
<<<<<<< HEAD
                <Route path="/edit/:id" element={<FormEdit />}></Route>
                <Route path="/psicofonias" element={<Psychofony />}></Route>      
=======
                <Route path="/edit/:id" element={<FormEdit />}></Route> 
                <Route path="/psicofonias" element={<Psychophonie />}></Route>      
>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
