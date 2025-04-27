import axios from "axios";


export default async function fetchData(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = response.data
    console.log(result);
    return result;
}

fetchData(2)