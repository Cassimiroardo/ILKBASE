import React, { Component ,Fragment } from 'react'
import jwt_decode from 'jwt-decode'

import Aside from './Aside'
import Competences from './Competences'
//import Feed from './Feed'

class Profile extends Component {
    constructor() {
        super()
        
        this.state = {
            name: '',
            email: '',

        }
    }

    componentDidMount() {
        const token = Storage.usertoken
        const decoded = jwt_decode(token)
        this.setState ({
            name: decoded.name,
            email: decoded.email,
        })
    }
    
    render(){
        return(
    <Fragment>
        <Aside userNome={this.state.name} userEmail={this.state.email}/>
        <Competences/>
    </Fragment>
        )
    }
}

export default Profile