import axios from "axios";
import React from "react";
import http from "../httpApi";

export default function GetData() {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    axios.get(http).then((response) => {
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