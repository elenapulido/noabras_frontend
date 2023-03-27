import React, { useEffect, useState } from "react";
import DataServices from "../service/DataServices";

const Data = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      const dataResponse = await DataServices();
      SetData(dataResponse)
    } 

    fetchData();
 
     });

  return (
    <div>
      <p>You can count on me</p>
    </div>
  );
};

export default Data;