import React from 'react'
import HTTPService from '../../service/HTTPService';
import { useState } from 'react';



function Form() {

    const [tittle, setTittle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: tittle,
            theme: category,
            description: description,
            location: location
        }

        HTTPService().createData(data)
            .then(response => {

                console.log(response.data);
            })
            .catch(error => {
                console.error(error);

            });
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Suceso</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escribe un título para tu suceso" onChange={(e) => setTittle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Localización</label>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Escribe la localización" onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="mb-3">
                <select required className="form-control" id="category" onChange={(e) => setCategory(e.target.value)}>
                    <option value="selected">Categoría</option>
                    <option value="Mitos y Leyendas">Mitos y Leyendas</option>
                    <option value="Avistamientos Ovnis">Avistamientos Ovnis</option>
                    <option value="Experiencias paranormales">Experiencias paranormales</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Enviar</button>
        </form>

    )
}

export default Form