import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 5000,
    headers: {'X-custom-Header' : 'foobar'}
})
export default AxiosInstance
