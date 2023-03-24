import axios from "axios";

async function DataServices() {
  try {
    const response = await axios.get("/model");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default DataServices;
