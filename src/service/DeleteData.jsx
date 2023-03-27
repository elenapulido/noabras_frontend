import axios from "axios";
import React from "react";
import http from "../httpApi";


export default function DeleteData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${http}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function deleteData() {
    axios
      .delete(`${http}/id`)
      .then(() => {
        alert("Data deleted!");
        setModel(null)
      });
  }

  if (!model) return "No data!"

  return (
    <div>
      <h1>{model.name}</h1>
      <p>{model.description}</p>
      <p>{model.location}</p>
      <image>{model.url}</image>
      <button onClick={deleteData}>Eliminar</button>
    </div>
  );
}