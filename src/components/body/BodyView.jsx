import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import EditForm from "../editForm/EditForm";
<<<<<<< HEAD
import "./BodyView.css";
=======
import "./BodyView.css"

>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7

function BodyView() {
    const [data, setData] = useState([]);
    const [editingData, setEditingData] = useState(null);

    useEffect(() => {

        HTTPService().getAllData()
            .then(response => {
                setData(response);
            })
            .catch(error => {
                console.log(error);

            });
    }, []);

<<<<<<< HEAD
=======

>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7
    const handleDelete = (id) => {
        if (window.confirm("¿Está seguro de que desea eliminar este elemento?")) {
            HTTPService().deleteData(id)
                .then(() => {

                    HTTPService().getAllData()
                        .then(response => {
                            setData(response);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    const handleEdit = (id) => {
        const dataToEdit = data.find(d => d.id === id);
        setEditingData(dataToEdit);
    }

<<<<<<< HEAD
    return (
        <>
            {editingData ? (
                <div>
                    <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
                </div>
            ) : (
                <div class="main-view1">
                    {data.map((legend) => (
                        <div key={legend.id} className="card mb-3 bg-dark centrar" style={{ maxwidth: "100px" }}>
                            <div className="row g-0 main-view1">
                                <div className="col-md-4">
                                    <img src={legend.url} className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8 text-white">
                                    <div className="card-body" style={{width:"60%"}}>
                                        <h5 className="card-title">{legend.name}</h5>
                                        <p className="card-text"><small className="text-body-secondary text-white">{legend.location}</small></p>
                                        <p className="card-text"><small className="text-body-secondary text-white">{legend.theme}</small></p>
                                        <p className="card-text">{legend.description}</p>
                                        <button className="btn btn-light" style={{margin:"15px"}} onClick={() => handleEdit(legend.id)}>Editar</button>
                                        <button className="btn btn-light" onClick={() => handleDelete(legend.id)}>Borrar</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                        <div className="d-grid gap-2 d-md-block">
                                        <a className="buttonToHome" href={"/"}>
                                            <button className="btn btn-secondary" type="button">INICIO</button></a>
                        </div>
                </div>
                
=======
>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7

            )}
        </>
    );
}



    return (
        <>
            {editingData ? (
                <div>
                    <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
                </div>
            ) : (
                <div className="main-view">
                    {data.map((legend) => (
                        <div key={legend.id} className="card mb-3 bg-dark" style={{ maxwidth: "100px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={legend.url} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white">
                                        <h5 className="card-title ">{legend.name}</h5>
                                        <p className="card-text "><small className="text-body-secondary text-white">{legend.location}</small></p>
                                        <p className="card-text "><small className="text-body-secondary text-white">{legend.theme}</small></p>
                                        <p className="card-text ">{legend.description}</p>
                                        <div className="col-md-2 col-xs-6">
                                            <button className="btn btn-light"  style={{margin:"15px"}} onClick={() => handleEdit(legend.id)}>Editar</button>
                                            <button className="btn btn-light"   onClick={() => handleDelete(legend.id)}>Borrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="d-grid gap-2 d-md-block">
                                        <a className="buttonToHome" href={"/"}>
                                            <button className="btn btn-secondary" type="button">INICIO</button></a>
                        </div>
</div>
            )}
        </>
    );
}

export default BodyView
