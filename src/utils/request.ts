/* eslint-disable */
import axios from "axios";
const request = axios.create({
    baseURL: "",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        originalUrl: window.location.href,
    },
});
request.interceptors.response.use(
    (response) => {
        const data = response.data;
        const { code, redirectUrl = "" } = data;
        // 鉴权功能
        if (code === 40001) {
            window.location.href = redirectUrl;
        } else {
            return response;
        }
    },
    (error) => {
        return error;
    }
);
export default request;
