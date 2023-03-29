import React, { useState } from "react";
// import HTTPService from "../../service/HTTPService";


const EditForm = ({ data,setData, onSubmit, onCancel }) => {
    const [editedData, setEditedData] = useState({ ...data });
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(editedData);
    };

    // const handleEdit = (id) => {
    //     if (window.confirm("¿Está seguro de que desea editar este elemento?")) {
          
    //         HTTPService().updateData(id)
    //        .then(response => {
    //               setData(response);
    //             })
    //             .catch(error => {
    //               console.log(error);
    //             });
    //         }
            
    //     }
      

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Título</label>
                <input type="text" className="form-control" id="name" name="name" value={editedData.name} onChange={handleInputChange} />
            </div>
          
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Localización</label>
                <textarea className="form-control" id="location" name="location" value={editedData.location} onChange={handleInputChange}></textarea>
            </div>
            <select required className="form-control" id="theme" onChange={handleInputChange} value={editedData.theme}>
                    <option value="selected">Categoría</option>
                    <option value="Mitos y Leyendas">Mitos y Leyendas</option>
                    <option value="Avistamientos Ovnis">Avistamientos Ovnis</option>
                    <option value="Experiencias paranormales">Experiencias paranormales</option>
                </select>
                <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" name="url" placeholder="Inserta una url" value={editedData.url} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <textarea className="form-control" id="description" name="description" value={editedData.description} onChange={handleInputChange}></textarea>
            </div>
            <div>
            <button type="submit" className="btn btn-primary me-2">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
            
            </div>
         
        </form>
    );

};

export default EditForm