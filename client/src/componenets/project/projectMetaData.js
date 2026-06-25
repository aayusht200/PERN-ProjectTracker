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

export const fields = {
    title: {
        label: 'Title',
        name: 'title',
        type: 'text',
        required: true,
    },
    description: {
        label: 'Description',
        name: 'description',
        type: 'textarea',
    },
    status: {
        label: 'Status',
        name: 'status',
        type: 'select',
        options: ['active', 'pending', 'done'],
    },
    start_date: {
        label: 'Start Date',
        name: 'start_date',
        type: 'date',
    },
    end_date: {
        label: 'End Date',
        name: 'end_date',
        type: 'date',
    },
};
