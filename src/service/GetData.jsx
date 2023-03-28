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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default GetData;
=======
export default GetData;
>>>>>>> 628a679 (footer and card)
=======
export default GetData;
>>>>>>> 628a679 (footer and card)
=======
export default GetData;
>>>>>>> 628a679 (footer and card)
