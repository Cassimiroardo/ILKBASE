import React, { Component, Fragment } from 'react'
import Logo from '../../assets/img/icon.png'
import { register } from '../service/UserFunctions'

class Register extends Component {
    constructor() {
        super()
            this.state = {
                email: '',
                password: '',
                name: ''
            }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        register(user).then(res => {
                this.props.history.push("/login")
            
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
                <label for="name">nome</label>
                <input type="text" name="name" id="name" placeholder="seu nome" value={this.state.name} onChange={this.onChange}/>
                <label for="email">email</label>
                <input type="email" name="email" id="email" placeholder="email" className="validate" value={this.state.email} onChange={this.onChange}/>
                <label for="password">senha</label>
                <input type="password" name="password" id="password" placeholder="senha" value={this.state.password} onChange={this.onChange}/>
                <label for="conf-password">confirme a senha</label>
                <input type="password" name="conf-password" id="conf-password" placeholder="confirme a senha"/>
                <input type="submit" value="CADASTRAR" className="green darken-1 btn waves-effect waves-light"/>
            </form>
            </aside>
            </Fragment>
        )
    }
}

export default Register