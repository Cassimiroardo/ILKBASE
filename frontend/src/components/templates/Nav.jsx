import React, { Component , Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class Nav extends Component {
    
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }
    
    render() {

        const loged = (
            <Fragment>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#/profile">Perfil</a></li>
                <li><a href="#/profile/feed">Feed</a></li>
                <li><a href="/" onClick={this.logOut.bind(this)}>Log out</a></li>
            </ul>
        
            </Fragment>
        )

        const notLoged = (
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Logar</Link></li>
                <li><Link to="/register">Cadastrar-se</Link></li>
            </ul>
        )

        return (
            <nav className="nav">
                <div className="nav-wrapper container">
                
                    {localStorage.getItem('usertoken') ? loged : notLoged}        

                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="https://www.facebook.com/KbaseItSolutions/?ref=br_rs"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/kbasesoftwares/"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/kbasesoftwares/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)