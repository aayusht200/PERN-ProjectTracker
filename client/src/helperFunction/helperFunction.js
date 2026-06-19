function toCapitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    if (!date) return '';

    const [year, month, day] = date.split('T')[0].split('-');

    return `${day}-${month}-${year}`;
}

export { toCapitalize, formatDate };
