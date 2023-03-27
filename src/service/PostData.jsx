import axios from "axios";
import React from "react";
import http from "../httpApi";

// const baseURL = "http://localhost:8080/model";

export default function PostData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${http}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function createData() {
    axios
      .model(http, {
        name: "Hello World!",
        description: "This is a new post."
      })
      .then((response) => {
        setModel(response.data);
      });
  }

  if (!model) return "No data!"

  return (
    <div>
      <h1>{model.name}</h1>
      <p>{model.description}</p>
      <p>{model.location}</p>
      <image>{model.url}</image>
      <button onClick={createData}>Crear</button>
    </div>
  );
}