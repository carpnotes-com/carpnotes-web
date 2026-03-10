export function formatToDate(rawDate: string) {
    const dateObj = new Date(rawDate);
    const formattedDate = dateObj.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    return formattedDate;
};