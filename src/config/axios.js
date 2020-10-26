import axios from 'axios';

const clienteAxios = axios.create({
//    baseURL: ' http://localhost:4000/'
    baseURL: 'https://github.com/tosomatias/Editor-de-Productos'
});

export default clienteAxios;
