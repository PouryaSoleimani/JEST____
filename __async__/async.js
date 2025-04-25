import axios from "axios";



export default async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;

}