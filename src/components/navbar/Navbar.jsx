import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {


  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
   <Link to="/"><img src={logo} alt="logo" /></Link>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul className="dropdown-menu">
            <Link to="/leyendas"><li><p className="dropdown-item" >Experiencias paranormales</p></li></Link>
            <Link to="/historias"><li><p className="dropdown-item" > Tus historias</p></li></Link>
            <Link to="/psicofonias"><li><p className="dropdown-item">Psicofonías</p></li></Link>
            </ul>
          </li>
         </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar