import React from 'react';
import Data from './components/Data';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Data></Data>}></Route>
    </Routes>
    </BrowserRouter> 
  );
}

export default App;