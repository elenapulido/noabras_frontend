import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8081/model";

export default function PutData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function updateData() {
    axios
      .put(`${baseURL}/id`, {
        name: "Hello World!",
        description: "This is an updated post."
      })
      .then((response) => {
        setModel(response.data);
      });
  }

  if (!model) return "No post!"

  return (
    <div>
      <h1>{model.name}</h1>
      <p>{model.description}</p>
      <p>{model.location}</p>
      <image>{model.url}</image>
      <button onClick={updateData}>Editar</button>
    </div>
  );
}