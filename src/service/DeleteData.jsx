import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8081/model";

export default function DeleteData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}/id`).then((response) => {
      setModel(response.data);
    });
  }, []);

  function deleteData() {
    axios
      .delete(`${baseURL}/id`)
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

