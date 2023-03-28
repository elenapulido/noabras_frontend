import React from 'react';
import Router from './routes/Routes'; 
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8081/model';

function App() {
  
      
  
  return (
    <>
      <Router/>
    </>
  );

}

export default App;
