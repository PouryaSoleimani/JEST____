import axios from "axios";




export default async function fetchData(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(response.data)
    return response.data;
}

fetchData(1)


