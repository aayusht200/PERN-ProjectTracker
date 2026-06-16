import { formatDate } from '../../helperFunction/helperFunction';

export const columns = [
    { header: 'Title', accessor: 'title' },
    { header: 'Description', accessor: 'description' },
    {
        header: 'Status',
        accessor: 'status',
    },
    {
        header: 'Start Date',
        accessor: 'start_date',
        render: (data) => {
            return formatDate(data);
        },
    },
    {
        header: 'End Date',
        accessor: 'end_date',
        render: (data) => {
            return formatDate(data);
        },
    },
];
