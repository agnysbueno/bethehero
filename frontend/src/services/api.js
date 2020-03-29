import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000", //base da url que se repete em todas as rotas
})

export default api;