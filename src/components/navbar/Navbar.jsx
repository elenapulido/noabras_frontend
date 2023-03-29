import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
   <Link to="/"><img src={logo} alt="" /></Link>
   
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Experiencias paranormales</a></li>
              <li><a className="dropdown-item" href="#"> Tus historias</a></li>
              <li><a className="dropdown-item" href="#">Psicofonías</a></li>
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