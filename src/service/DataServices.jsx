// import axios from "axios";

export function DataServices() {
        const url = "http://localhost:8080/legends";
        try {
                return fetch(url).then((response) => response.json())                
        } catch (error) {
                return[]
        }
}


//    async function DataServices() {
//         const response = await axios.get("http:/localhost:8080/legends")
//         return response.stories
//         }


export default DataServices;