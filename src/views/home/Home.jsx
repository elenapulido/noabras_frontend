import React from "react";

import "./Home.css";
import BodyHome from "../../components/body/BodyHome"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer"


function Home() {


    return (
        <div>
            <Navbar/>
            <BodyHome />
            <Footer/>

        </div>
    )
}

export default Home;
