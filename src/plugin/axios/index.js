import axios from "axios";
import {notification} from "antd";

function select(state) {
    return state.auth.user ? state.auth.user.token : null;
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || "https://dev.api.qlnb.haivanexpress.vn",
});

axiosInstance.interceptors.request.use(function(config) {
    let token =  "715|yeLF81Bcn8XakwHwVJvhWd0gmmdfopxhDkgyyb89";
    config.headers = {
        ...config.headers,
        Authorization: "Bearer " + token
    };
    // you can also do other modification in config
    return config;
}, function(error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    const statusCode = error.response.status;
    switch (statusCode) {
    case 401:
        window.location.href = "/login";
        break;
    case 404:
        // window.location.href = "/404";
        break;
    case 403:
        notification["error"]({
            message: "Thông báo",
            description: error.response.data.message,
        });
        break;
    case 422:
        notification["error"]({
            message: "Thông báo",
            description: error.response.data.message,
        });
        break;
    case 500:
        notification["error"]({
            message: "Thông báo",
            description: "Có lỗi xảy ra!",
        });
        break;
    case 400:
        notification["error"]({
            message: "Thông báo",
            description: error.response.data.message,
        });
        break;
    default:
    }
    return Promise.reject(error);
});

export default axiosInstance;
