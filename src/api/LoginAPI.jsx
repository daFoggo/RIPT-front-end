import axios from "axios";

const LoginAPI = axios.create({
    baseURL: "http://172.16.8.81:8018/web/session"
})

export default LoginAPI;