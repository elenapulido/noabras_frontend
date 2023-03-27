import React from 'react';
import Data from './components/Data';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Data></Data>}></Route>
    </Routes>
    </BrowserRouter> 
  );
}

export default App