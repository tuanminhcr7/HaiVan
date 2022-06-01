import axios from "../plugin/axios";

export const apiLogin = async (params) => {
    return await axios.post("/api/login", params);
};

export const logout = async (params) => {
    return await axios.get("/api/logout", params);
};

export const getUser = async (params) => {
    return await axios.get("/api/user", params);
}

export const getAdmin = async (params) => {
    return await axios.get("/api/admin", params);
}