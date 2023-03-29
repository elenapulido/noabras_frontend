import axios from "axios";

async function GetData() {
  try {
    const response = await axios.get("http://localhost:8081/model");
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default GetData;