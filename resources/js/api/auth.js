import axios from "axios"
import { setSessionObject } from "../utils.js/session"
/**
 * Authentication
 */
export default class Auth{

    /**
     *
     * @param {} username
     * @param {*} password
     * @returns {Boolean} return if success or failure
     */
    async handleLogin(email, password){
        if(!email || !password) return false
           const headers = {
                'Content-Type': 'Application/json'
            }
            const data = {
                "email": email,
                "password": password
            }
        try {
            const response = await axios.post("http://localhost:8000/api/login", data, { headers })
            console.log(response.data.access_token)
            setSessionObject('token', response.data.access_token)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }

}

