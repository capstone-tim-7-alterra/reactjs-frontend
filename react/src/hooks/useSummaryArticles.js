import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data.data);

export const useSummaryArticles = () => {
    const { data, error, isLoading } = useSWR('/api/summary-articles', fetcher);
    return {
        summary: data,
        isLoading,
        isError: error
    };
};
