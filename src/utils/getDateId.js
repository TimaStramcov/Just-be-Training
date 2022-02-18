const nowDate = new Date()

export const getDateId = (nowDate) => {
    const {day, month, year} = {
        day: nowDate.getDate(),
        month: nowDate.getMonth() + 1,
        year: nowDate.getFullYear(),
    }
    return `${day}.${month}.${year}`
}