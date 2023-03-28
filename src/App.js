import Router from './routes/Routes'; 
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/model');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  
      
  
  return (
    <>
     
     <Router/>
     
     
    </>
  );

}


export default App