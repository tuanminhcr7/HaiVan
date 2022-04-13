import axios from "../plugin/axios";

export const getFileDetail = (params) => {
    return axios.get("/api/files/" + params);
};

export const getRecentHistory = async (params) => {
    return await axios
        .get("/api/recent")
        .then((response) => {
            return response;
        })
        .catch((err) => {

        });
};

export const uploadFile = (params, config) => {
    return axios.post("/api/files", params, config);
};

export const removeFile = (params) => {
    return axios.post(`/api/delete-file/${params}`);
};

export const getTrash = (params) => {
    return axios.get(`/api/trash`, params);
};

export const editFile = (params) => {
    return axios.put(`/api/files/${params.id}?name=${params.name}&description=${params.description}`);
};

export const getMyDoc = (params) => {
    return axios.get(`/api/my-doc`, params);
};

export const downloadFile = (params) => {
    return axios.get(`/api/download-file/${params}`, { responseType: "blob" });
};

export const moveFile = (params) => {
    return axios.put(`/api/move-file/${params.id}?folder_id=${params.folder_id}`);
};

export const getDepartment = (params) => {
    return axios.get(`/api/get-department`, params);
};

export const getDetailShareFile = (params) => {
    return axios.get(`/api/get-share-file/${params}`);
};

export const updateShareFile = (params, id) => {
    return axios.post(`/api/share-file/${id}`, params);
};


export const myFileShared = (params) => {
    return axios.get(`/api/my-file-shared`, params);
}

export const getUserShareFile = (params) => {
    return axios.get(`/api/get-user-share-file/${params.id}?name=${params.name}`);
};

export const updateFavorite = (id) => {
    return axios.post(`/api/doc-favorite/${id}`);
};

export const docFavorite = (params) => {
    return axios.get(`/api/doc-favorite`, params);
};
