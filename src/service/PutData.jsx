import axios from "axios";
import React from "react";
import http from "../httpApi";


export default function PutData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${http}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function updateData() {
    axios.put(`${http}/${id}`, {
        name: "Hello World!",
        theme,
        description: "This is an updated post.",
        location,
        url
      })
      .then((response) => {
        setModel(response.data);
      });
  }

  if (!model) return "No post!"

  return (
    <div>
      <h1>{model.name}</h1>
      <p>{model.theme}</p>
      <p>{model.description}</p>
      <p>{model.location}</p>
      <image>{model.url}</image>
      <button onClick={updateData}>Editar</button>
    </div>
  );
}