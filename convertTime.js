function convertTime(timestamp) {
    const date = new Date(timestamp * 1000)
    let hours = date.getHours()
    const minutes = date.getMinutes()
    let ampm = "am"
    if (hours > 12 ) {
        hours = hours - 12
        ampm = "pm"
    }
    return `${hours}:${minutes} ${ampm}`
}

export default convertTime