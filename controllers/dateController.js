function timestampFormat(date) {
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    return date.toLocaleString('en-AU', options)
};

module.exports = timestampFormat;