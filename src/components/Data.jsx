import React, { useEffect, useState } from "react";
import GetData from "../service/GetData";

const Data = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      
      const dataResponse = await GetData();
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