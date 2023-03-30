<<<<<<< HEAD
import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='main-navbar'>
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
   <Link to="/"><img src={logo} alt="logo" /></Link>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
=======

import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "./Navbar.css"



const items = [
 ];

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const results = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);


  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
   <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7
              Menu
            </a>
            <ul className="dropdown-menu bg-dark">
            <Link to="/leyendas"><li><p className="dropdown-item text-white" >Experiencias paranormales</p></li></Link>
            <Link to="/historias"><li><p className="dropdown-item text-white" > Tus historias</p></li></Link>
            <Link to="/psicofonias"><li><p className="dropdown-item text-white">Psicofonías</p></li></Link>
            </ul>
          </li>
         </ul>
        <form className="d-flex" role="search">
<<<<<<< HEAD
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
=======
          <input className="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
          <ul>
        {searchResults.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
        </form>
        <div>
      
      
    </div>
      </div>
    </div>
  </nav>
  </>
>>>>>>> ca16ae9bbbf27c50e7fe4b2d512b8926f73f76f7
  )
}

export default Navbar