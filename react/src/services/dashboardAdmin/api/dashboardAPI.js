import axiosInstance from '../../axiosInstance';

export const fetchReportProducts = () => {
    return axiosInstance.get('/api/v1/admin/products-report');
}

export const fetchReportEvents = () => {
    return axiosInstance.get('/api/v1/admin/events-report');
}

export const fetchSummaryDashboard = () => {
    return axiosInstance.get('/api/v1/admin/dashboard-header');
}