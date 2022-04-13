import axios from "../plugin/axios";

export const createProjectGroup = (name) => {
    return axios.post(`api/tasking/project-groups`, {name: name});
};

export const projectGroupData = (id) => {
    return axios.get(`api/tasking/project-groups/${id}`);
};

export const addProjectToProjectGroup = (projectGroupId, projectIds) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/add-multi-project`, {project_ids: projectIds});
};

export const removeProjectFromProjectGroup = (projectGroupId, projectId) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/remove-project`, {project_id: projectId});
};

export const renameProjectGroup = (projectGroupId, name) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/rename`, {name: name});
};

export const removeProjectGroup = (projectGroupId) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/remove`);
};

export const getDepartmentsList = async () => {
    return await axios.get("api/tasking/departments");
}

export const shareProjectGroupToMembers = (projectGroupId, memberIds) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/share-project-group-to-members`, {member_ids: memberIds});
};

export const unShareProjectGroupToMembers = (projectGroupId, memberId) => {
    return axios.post(`api/tasking/project-groups/${projectGroupId}/unshare-project-group`, {member_id: memberId});
};