
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import "./Navbar.css"


const items = [];

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
          <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
              <input className="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={handleChange} aria-label="Search" />
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
  )
}

export default Navbar