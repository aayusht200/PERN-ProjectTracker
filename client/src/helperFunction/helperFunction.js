function toCapitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    const localDate = new Date(date);
    return `${localDate.getDate()}-${localDate.getMonth()}-${localDate.getFullYear()}`;
}

export { toCapitalize, formatDate };
