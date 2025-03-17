import axios from 'axios';


export const api = axios.create({
    baseURL: "https://star-wars-api.xdbtqu.easypanel.host/comments",
})