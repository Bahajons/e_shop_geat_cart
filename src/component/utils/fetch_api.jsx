import Axios from "./Axios"

// User
async function register(user) {
    return await Axios().post(`auth/register/`, { ...user })
}
async function login_start(user) {
    return await Axios().post(`auth/login_start/`, { ...user })
}
async function login_end(user) {
    return await Axios().post(`auth/login_end/`, { ...user })
}
export { register, login_start, login_end }