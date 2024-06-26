import axiosInstance from "../../axiosInstance";

export const fetchProfile = () => {
    return axiosInstance.get('/api/v1/admin/avatar');
}

