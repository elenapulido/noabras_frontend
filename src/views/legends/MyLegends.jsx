import React, { useState } from "react";
import { useEffect } from "react";
import GetData from "../../service/GetData";

function MyLegends() {
  useEffect(() => {
    dataFetch();
  }, []);

  const [MyLegends, SetMyLegends] = useState([]);

  const dataFetch = async () => {
    const dataResponse = await GetData();
    SetMyLegends(dataResponse);
  };

  let legends = () => {
    MyLegends.map((data) => {
      <li>{data}</li>;
    });
  };
  return (
    <div>
      Legends
      <tbody>
        {MyLegends.map((data) => (
          <tr key={data.id}>
            <td>{data.name} </td>
            <td>{data.theme}</td>
            <td>{data.description}</td>
            <td>{data.location}</td>
            <td>{data.url}</td>
          </tr>
        ))}
        ;
      </tbody>
    </div>
  );
}

export default MyLegends;
