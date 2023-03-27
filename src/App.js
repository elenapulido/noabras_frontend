import React from 'react';
import Data from './components/Data';
import Router from './routes/Routes'; 
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8081/';

function App() {
  
  return (
    <>
      <Router/>
    </>
  );

}

export default App;


