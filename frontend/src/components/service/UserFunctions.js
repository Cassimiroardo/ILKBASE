import axios from 'axios'

export const register = newUser => {
    return axios

        .post('http://localhost:5000/users/register', {
            name: newUser.name,
            password: newUser.password,
            email: newUser.email
        })
        .then(res => {
            console.log('registred')
        })
}

export const login = user => {
    return axios
        .post('http://localhost:5000/users/login', {
            email: user.name,
            password: user.password
        })
        .then(res => {
            Storage.setItem('usertoken', res.data)
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}