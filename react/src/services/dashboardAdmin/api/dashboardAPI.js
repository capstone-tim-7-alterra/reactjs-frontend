import axiosInstance from '../../axiosInstance';

export const fetchReportProducts = () => {
    return axiosInstance.get('/api/v1/admin/dashboard/report/product');
}