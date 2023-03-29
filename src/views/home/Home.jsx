import React from "react";
import PropTypes from "prop-types";
import { Image } from 'react-bootstrap'
import cuentosyleyendas from '../../assets/imagesHome/cuentosyleyendas.jpg'
import "./Home.css";
import BodyView from "../../components/body/BodyView";
import Form from "../../components/form/Form";


function Home() {


    return (
        <div>
            <BodyView />
            <Form />

        </div>
    )
}

export default Home;
