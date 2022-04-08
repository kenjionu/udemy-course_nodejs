const generateMessage = (text, username) => {
    return {
        username,
        text,
        createdAt: new Date().getTime()
    }
}

const generateMessageLocation = (username, url) => {
    return {
        username,
        url,
        createdAt:  new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateMessageLocation
}