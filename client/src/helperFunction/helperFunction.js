function toCapitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    if (!date) return '';

    const plain = Temporal.PlainDate.from(date.split('T')[0]);
    return plain.toString();
}
export { toCapitalize, formatDate };
