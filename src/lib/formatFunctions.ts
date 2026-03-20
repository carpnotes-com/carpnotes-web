'use server';

export async function formatToDate(locale: string, rawDate: string) {
    const dateObj = new Date(rawDate);
    const formattedDate = new Intl.DateTimeFormat(`${locale == `ua` ? `uk-UA` : `${locale}` }`, {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(dateObj);

    return formattedDate;
};