import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/templates/Home'
import Login from '../components/templates/Login'
import Register from '../components/templates/Register'
import Profile from '../components/templates/Profile'

export default props => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Redirect from="*" to="/"/>
    </Switch>
)