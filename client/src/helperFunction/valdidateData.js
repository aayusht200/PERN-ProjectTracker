function validate(data) {
    const nextErrors = {};
    if (!data.title.trim()) {
        nextErrors.title = 'Title is required';
    }

    if (!data.start_date) {
        nextErrors.start_date = 'Start date is required';
    }

    if (!data.start_date) {
        nextErrors.end_date = 'Start date is required';
    }
    if (!data.end_date) {
        nextErrors.end_date = 'End date is required';
    }

    if (data.start_date && data.end_date && data.end_date < data.start_date) {
        nextErrors.end_date = 'End date cannot be before start date';
    }

    return nextErrors;
}

export { validate };
