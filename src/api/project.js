import axiosInstance from "../plugin/axios";
import axios from "../plugin/axios";

export const projectData = async (idProject) => {
  return await axios
    .get(`/api/tasking/projects/${idProject}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      
    });
};

export const addUserToProject = async (params, idProject) => {
  return await axios
    .post(`/api/tasking/projects/${idProject}/invite-member`, params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      
    });
};

export const removeUserOutOfProject = async (params, idProject) => {
  return await axios
    .post(`/api/tasking/projects/${idProject}/remove-member`, params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      
    });
};

export const editProject = async (params, idProject) => {
  return await axiosInstance
    .post(`/api/tasking/projects/${idProject}/rename`, params)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      
    });
};

export const getRecentProject = () => {
  return axios.get("/api/tasking/dashboard/recent-projects");
};

export const getFavoriteProject = () => {
  return axios.get("/api/tasking/dashboard/favorite-projects");
};

export const favoriteProject = (params) => {
  return axios.post(`api/tasking/dashboard/favorite-projects`, params);
};

export const createProject = (params) => {
  return axios.post("/api/tasking/projects", params);
};

export const membersProject = (projectId) => {
  return axios.get(`/api/tasking/projects/${projectId}/members`);
};

export const searchMember = (name, departmentId = '') => {
  return axios.get(`/api/tasking/search-members?name=${name}&department_id=${departmentId}`);
};

export const trashTaskProject = (projectId) => {
  return axios.get(`/api/tasking/projects/${projectId}/trashed-tasks`);
};

export const searchProjectJoined = (keyword) => {
  return axios.get(`/api/tasking/dashboard/joined-projects?keyword=${keyword}`);
};

export const removeProject = (id) => {
  return axios.post(`api/tasking/projects/${id}/remove`);
};

export const searchProject = (name, projectGroupId) => {
  return axios.get(`/api/tasking/search-projects-not-in-group?name=${name}&project_group_id=${projectGroupId}`);
};

export const exportProject = (id) => {
  return axios.get(`/api/tasking/projects/${id}/export-project`, { responseType: "blob" });
}


