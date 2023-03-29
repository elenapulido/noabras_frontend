import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";

function BodyView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        HTTPService().getAllData()
        .then(response => {
            setData(response);
        })
        .catch(error => {
            console.log(error);

        });
    }, []);

  

 return (
    <div>            
            <div className="main-view">

                {data.map((legend) => (

                    <div className="card" key={legend.id} style={{ width: "18rem" }}>
                        <img className="card-img-top" src={legend.url} alt="Card" />
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><h5 className="card-title">{legend.name}</h5></li>
                                <li className="list-group-item"><p className="card-text">{legend.description}</p></li>                            
                            </ul>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{legend.location}</li>
                            <li className="list-group-item">{legend.theme}</li>
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

        </div >

    );     
        
    
};


export default BodyView