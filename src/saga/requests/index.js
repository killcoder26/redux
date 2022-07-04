import axios from 'axios';

export default function getMyUser() {
    return axios.request({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    })
}