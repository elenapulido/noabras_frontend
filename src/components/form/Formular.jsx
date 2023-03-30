import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import HTTPService from '../../service/HTTPService';
import "./Formular.css";

const Formular = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [url, setUrl] = useState('');


    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        const data = {
            name: title,
            theme: category,
            description: description,
            location: location,
            url: url
            
        }
        event.target.reset();

        HTTPService().createData(data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });        
    }

    return (
        <div className='main-form'>
            <h2>COMPARTE TU EXPERIENCIA</h2>
            <Form className='create-form' onSubmit={handleSubmit}>                
                <Form.Field>
                    <label>TÍTULO</label>
                    <input onChange={(event) => { setTitle(event.target.value) }}
                        placeholder='Título experiencia' type="text" autoFocus />
                </Form.Field>
                <Form.Field>
                    <label>DESCRIPCIÓN</label>
                    <TextArea onChange={(event) => { setDescription(event.target.value) }} 
                    rows={7} placeholder="Cuéntanos tu experiencia..." />
                </Form.Field>
                <Form.Field label='TIPO' control='select' onChange={(event) => { setCategory(event.target.value) }} >
                    <label>TIPO</label>
                    <input placeholder='Tipo experiencia' type="text" />
                    <option value='Mitos y leyendas'>Mitos y leyendas</option>
                    <option value='Avistamientos ovnis'>Avistamientos ovnis</option>
                    <option value='Experiencias paranormales'>Experiencias paranormales</option>
                </Form.Field>
                <Form.Field>
                    <label>LOCALIZACIÓN</label>
                    <input onChange={(event) => { setLocation(event.target.value) }}
                        placeholder='Localización experiencia' type="text" />
                </Form.Field>
                <Form.Field>
                    <label>IMAGEN</label>
                    <input onChange={(event) => { setUrl(event.target.value) }}
                        placeholder='Imagen experiencia' type="text" />
                </Form.Field>
                <Form.Field>
                    <label for="myfile">CARGAR IMÁGENES</label>
                    <input type="file" id='myfile' name='myfile'></input>
                </Form.Field>                
                <Button content='Enviar' icon='like'></Button>
                <Button content='Cancelar' icon='cancel' href='/'></Button>                
            </Form>
        </div>       

    )
}

export default Formular

