import React, { Component, Fragment } from 'react'
import Logo from '../../assets/img/icon.png'
import '../service/UserFunctions'
import { login } from '../service/UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password:''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) {
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            this.props.history.push("/profile")
        })

    }



    render() {

        return (
            <Fragment>
            <main className="main">
                <img src={Logo} alt="Logo by m.m.groovy (meu amigo) follow him on instagram!"/>
            </main>
            <aside className="aside">
            <form action="" className="form center" onSubmit={this.onSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="email" className="validate" value={this.state.email} onChange={this.onChange}/>
                <label htmlFor="password">senha</label>
                <input type="password" name="password" id="password" placeholder="password" value={this.state.password} onChange={this.onChange}/>
                <input type="submit" value="LOGAR" className="green darken-1 btn waves-effect waves-light"/>
            </form>
            </aside>
            </Fragment>
        )
    }
}

export default Login