import axios from "axios";
import React from "react";


const baseURL = "'http://localhost:8081/model'";

export default function GetData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setModel(response.data);
    });
  }, []);

  if (!model) return null;

  return (
    <div>
      <h1>{model.name}</h1>
      <p>{model.description}</p>
      <p>{model.location}</p>
      <image>{model.url}</image>
    </div>
  );
}

