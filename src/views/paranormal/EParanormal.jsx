import React, { useState } from "react";
import { useEffect } from "react";
import GetData from "../../service/GetData";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./EParanormal.css";

function EParanormal() {
    useEffect(() => {
        dataFetch();
    }, []);

    const [EParanormal, SetEParanormal] = useState([]);

    const dataFetch = async () => {
        const dataResponse = await GetData();
        SetEParanormal(dataResponse);
    };
    return (
        <div>
            <Navbar></Navbar>
            <div className="main-view">

                {EParanormal.map((data) => (

                    <div className="card" key={data.id} style={{ width: "18rem" }}>
                        <img className="card-img-top" src={data.url} alt="Card" />
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h5 className="card-title">{data.name}</h5></li>
                                <li className="list-group-item"><p className="card-text">{data.description}</p></li>                            
                            </ul>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{data.location}</li>
                            <li className="list-group-item">{data.theme}</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="buttonEdit">
                                <button className="btn btn-primary" type="button">Editar</button></a>
                            <a href="#" className="buttonEdit">
                                <button className="btn btn-primary" type="button">Eliminar</button></a>
                        </div>
                    </div>

                ))}

            </div >

            <div className="d-grid gap-2 d-md-block">
                <a className="buttonToHome" href={"/"}>
                    <button className="btn btn-secondary" type="button">INICIO</button></a>                
            </div>
            <Footer></Footer>

        </div >

    );

}
export default EParanormal