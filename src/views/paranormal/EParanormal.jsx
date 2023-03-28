import React, { useState } from "react";
import { useEffect } from "react";
import GetData from "../../service/GetData";

function EParanormal() {
    useEffect(() => {
        dataFetch();
    }, []);

    const [EParanormal, SetEParanormal] = useState([]);

    const dataFetch = async () => {
        const dataResponse = await GetData();
        SetEParanormal(dataResponse);
    };
    return (
        <div>

        {EParanormal.map((data) => (
    

        <div className="card" key={data.id} style={{width: "18rem"}}>
            <img className="card-img-top" src={data.url} alt="Card"/>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{data.location}</li>
                    <li className="list-group-item">{data.theme}</li>
                </ul>
                <div className="card-body">
                    {/* <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a> */}
                </div>
        </div>
        ))};

    </div>
    );

}
export default EParanormal