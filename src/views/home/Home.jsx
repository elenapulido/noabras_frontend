import React from "react";
import PropTypes from "prop-types";
import { Image } from 'react-bootstrap'
import cuentosyleyendas from '../../assets/imagesHome/cuentosyleyendas.jpg'
import "./Home.css";
import BodyView from "../../components/body/BodyView";
import Form from "../../components/form/Form";


function Home({ title, text, url }) {
  
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <Image src={cuentosyleyendas} fluid className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "En nuestra web encontrarás  narraciones de hechos sobrenaturales, naturales, paranormales e increíbles o una mezcla de ellos, que se han transmitido de generación en generación en forma oral o escrita y que hoy compartimos con vosotros "}
        </p>
        <a
          href={url ? url : "/paranormal"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Go to {title}
        </a>
      </div>
    </div>
  );






   
        <div>
            <BodyView />
            <Form />

        </div>
    )
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default Home;
