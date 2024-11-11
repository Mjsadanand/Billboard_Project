import user from "./models/user.js"
import bcrypt from 'bcrypt'
import connectToDatabase from './db/db.js'

const userRegister = async ()=>{
    connectToDatabase()
    try {
        const hashPassword = await bcrypt.hash("lead",10)
        const newUser = new user({
            name : "Lead",
            email :"lead@gmail.com",
            password: hashPassword,
            role : "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();