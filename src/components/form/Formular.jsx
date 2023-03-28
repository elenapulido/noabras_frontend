import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import "./Formular.css";

const Formular = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    

    const postData = () => {
        console.log(title);
        console.log(description);
        console.log(type);
        console.log(location);
        
    }

    return (
        <div className='main-form'>
            <h2>COMPARTE TU EXPERIENCIA</h2>
            <Form className='create-form'>                
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
                <Form.Field>
                    <label>TIPO</label>
                    <input onChange={(event) => { setType(event.target.value) }}
                        placeholder='Tipo experiencia' type="text" />
                </Form.Field>
                <Form.Field>
                    <label>LOCALIZACIÓN</label>
                    <input onChange={(event) => { setLocation(event.target.value) }}
                        placeholder='Localización experiencia' type="text" />
                </Form.Field>
                <Form.Field>
                    <label for="myfile">CARGAR IMÁGENES</label>
                    <input type="file" id='myfile' name='myfile'></input>
                </Form.Field>                
                <Button onClick={postData} type='submit'>Submit</Button>
                <Button content='Hola' icon='like'></Button>
            </Form>
        </div>
       

    )
}

export default Formular