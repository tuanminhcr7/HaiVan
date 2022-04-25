import axios from "../../src/plugin/axios";

export const getMenu = async (params) => {
  return await axios
    .get("/api/folders")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
};

export const getUsers = () => {
  return axios.get("api/user");
}

export const getSearch = (params) => {
  return axios.get("api/search-elt?search=" + params)
};

export const getFolder = () => {
  return axios.get("/api/folders");
}

export const getDataHome = async (params) => {
  return await axios
    .get("api/home")
    .then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
};

export const getFolderDetail = async (params) => {
  return await axios
    .get("api/folders/" + params)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      
    });
};

export const addFolder = (params) => {
  return axios.post("api/folders", params);
};

export const removeFolder = (params) => {
  return axios.post(`/api/remove-folder/${params}`);
};

export const editFolder = (params) => {
  return axios.put(`/api/folders/${params.id}?name=${params.name}&description=${params.description}`);
};

export const getDetailShareFolder = (params) => {
  return axios.get(`/api/get-share-folder/${params}`);
};

export const updateShareFolder = (params, id) => {
  return axios.post(`/api/share-folder/${id}`, params);
};

export const getUserShareFolder = (params) => {
  return axios.get(`/api/get-user-share-folder/${params.id}?name=${params.name}`);
};