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





    return (
        <>
            {editingData ? (
                <div>
                    <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
                </div>
            ) : (
                <div>
                    {data.map((legend) => (
                        <div key={legend.id} className="card mb-3" style={{ maxwidth: "100px" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={legend.url} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{legend.name}</h5>
                                        <p className="card-text"><small className="text-body-secondary">{legend.location}</small></p>
                                        <p className="card-text"><small className="text-body-secondary">{legend.theme}</small></p>
                                        <p className="card-text">{legend.description}</p>
                                        <button className="btn btn-primary" onClick={() => handleEdit(legend.id)}>Editar</button>
                                        <button className="btn btn-primary" onClick={() => handleDelete(legend.id)}>Borrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

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