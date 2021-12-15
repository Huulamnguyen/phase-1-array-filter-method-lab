// Code your solution here
const findMatching = (records, string) => {
    const res = records.filter(e => e.toLowerCase() === string.toLowerCase());
    return res
}

const fuzzyMatch = (records, string) => {
    const res = records.filter(e => e.toLowerCase().indexOf(string.toLowerCase()) === 0)
    return res
}

const matchName = (records, string) => {
    const res = records.filter(record => record.name === string)
    return res
}