import axios from 'axios'
//CONFIGURACIÓN DE API

export default axios.create({
    baseURL: `http://localhost:3050`
});