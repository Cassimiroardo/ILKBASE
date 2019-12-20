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
            email: user.email,
            password: user.password
        })
        .then(user  => {
                localStorage.setItem('usertoken',user.data)
                return user.data
        })
        .catch(err => {
            console.log(err)
        })
}