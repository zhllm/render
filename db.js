const db = {
    users: []
}

export default {
    getData: (key) => db[key],
    setData: (key, value) => {
        db[key] = value
        return db
    }
}