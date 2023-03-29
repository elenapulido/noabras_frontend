import React, { useState } from "react";


const EditForm = ({ data, onSubmit, onCancel }) => {
    const [editedData, setEditedData] = useState({ ...data });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(editedData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Título</label>
                <input type="text" className="form-control" id="title" name="title" value={editedData.title} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="theme" className="form-label">Tema</label>
                <input type="text" className="form-control" id="theme" name="theme" value={editedData.theme} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <textarea className="form-control" id="description" name="description" value={editedData.description} onChange={handleInputChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary me-2">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
        </form>
    );

};

export default EditForm