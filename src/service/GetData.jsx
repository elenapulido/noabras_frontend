import axios from "axios";

async function GetData() {
  try {
    const response = await axios.get("");
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default GetData;