import React, { Component ,Fragment } from 'react'
import jwt_decode from 'jwt-decode'
import Routes from '../../Routes/RoutesProfile'

import Aside from './Aside'

class Profile extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            email: '',

        }

    }

        componentDidMount(){
            const user = localStorage.getItem('usertoken') 
            const decoded = jwt_decode(user)
            this.setState({
                name:decoded.name,
                email: decoded.email
            })

    }

    
    render(){
        return(
    <Fragment>
        <Aside userName={this.state.name} userEmail={this.state.email}/>
        <Routes/>
    </Fragment>
        )
    }
}

export default Profile