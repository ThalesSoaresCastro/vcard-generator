import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:5050',
    //baseURL:'http://vcard-api:5050',

});

export default api;