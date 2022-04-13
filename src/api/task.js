import axios from "../plugin/axios";

export const markComplete = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/mark-as-complete`, params);
};

export const markUnComplete = (projectId, taskId) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/mark-as-uncomplete`);
};

export const addAssignee = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/add-assignee`, params);
};

export const removeAssignee = (projectId, taskId) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/remove-assignee`);
};

export const renameTask = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/rename`, params);
};

export const setTimeTask = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/set-time`, params);
};

export const getMyTask = (params) => {
    return axios.get(`api/tasking/dashboard/my-tasks?${params}`);
}
export const addTask = (projectId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks`, params)
}

export const getTaskDetail = (projectId, taskId) => {
    return axios.get(`api/tasking/projects/${projectId}/tasks/${taskId}`);
};

export const createTask = (projectId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks`, params);
};

export const commentTask = (projectId, taskId, params, config) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/comments`, params, config);
};

export const descriptionTask = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/describe`, params);
};

export const reportTask = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/report`, params);
};

export const progressTask = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/update-progress`, params);
};

export const removeTask = (projectId, taskId) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/remove`);
};

export const moveTaskToSection = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/move-to-section`, params);
};

export const moveTaskTo = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/move-to`, params);
};

export const myTask = () => {
    return axios.get(`api/tasking/dashboard/my-tasks`);
};

export const searchTags = (name) => {
    return axios.get(`api/tasking/search-tags?name=${name}`);
};

export const attachTags = (projectId, taskId, params) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/tag-task`, params);
};

export const exportMyTask = (params) => {
    return axios.get(`/api/tasking/dashboard/export-my-tasks?${params}`, { responseType: "blob" });
}

export const setImportant = (projectId, taskId, important) => {
    return axios.post(`api/tasking/projects/${projectId}/tasks/${taskId}/is-important`, {important: important});
};
