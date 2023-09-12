import axios from 'axios';

const API = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1'
})

export default API;