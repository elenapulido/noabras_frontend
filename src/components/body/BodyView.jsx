import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";
import EditForm from "../editForm/EditForm";


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
    
    const handleEdit = (id) => {
        const dataToEdit = data.find(d => d.id === id);
        setEditingData(dataToEdit);
      }

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

  

  

      return (
        <>
          {editingData ? (
            <div>
              <h4>Editar leyenda</h4>
              <EditForm data={editingData} onSubmit={handleEdit} onCancel={handleEdit} />
            </div>
          ) : (
            <div>
              {data.map((legend) => (
                <div key={legend.id} className="card mb-3" style={{ maxwidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={legend.url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{legend.title}</h5>
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

export default BodyView
