import {
    nanoid
} from "nanoid"
import db from "../db"

export default class UserModel {
    constructor({
        name,
        age,
        id
    }) {
        this.id = nanoid()
        this.name = name
        this.age = age
    }

    create() {
        const users = db.getData('users')
        users.push({
            id: this.id,
            name: this.name,
            age: this.age,
        })
        db.setData('users', users)
        return this
    }
    static getUserList() {
        return db.getData('users');
    }
}