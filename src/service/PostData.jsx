PostData.jsx
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8081/model";

export default function PostData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function createData() {
    axios
      .model(baseURL, {
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