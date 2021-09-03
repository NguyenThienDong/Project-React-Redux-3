import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

export default function callApi(endpoint, method='GET', body) {
    return axios({
        method: method,
        url: `/${endpoint}`,
        data: body
    }).catch(err => console.log(err));
}