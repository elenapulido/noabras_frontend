import HTTPService from "../../service/HTTPService";
import React, { useState, useEffect } from "react";

function BodyView() {
    const [data, setData] = useState([]);

    useEffect(() => {
        
        HTTPService().getAllData()
        .then(response => {
            setData(response);
        })
        .catch(error => {
            console.log(error);

        });
    }, []);

  

 return (
    <>
        {data.map((legend)=>(
            <div key={legend.id} className="card mb-3" style={{maxwidth: "540px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={legend.url} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{legend.tittle}</h5>
                            <p className="card-text"><small className="text-body-secondary">{legend.theme}</small></p>
                            <p className="card-text">{legend.description}</p>
                           
                        </div>
                    </div>
                </div>
            </div>

        ))}
      </>      
        
    )
};


export default BodyView