import React, { useEffect, useState } from "react";
import DataServices from '../service/DataServices';

const Data = () =>{
    const [data, SetData] = useState ([]);

    useEffect(()=>{
        DataServices().then(stories =>{
            SetData(stories)
    })
    console.log(data);
});

return (
    <div>
      <p>You can count on me</p>
    </div>
  )
}

export default Data;