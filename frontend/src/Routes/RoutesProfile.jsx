import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

import Home from '../components/templates/Home'
import Competences from '../components/templates/Competences'
import Feed from '../components/templates/Feed'
//import EditUser from '../components/templates/EditUser'

export default props => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/profile/competences" component={Competences}/>
        <Route path="/profile/feed" component={Feed}/>
        {/*<Route path="/profile/editUser" component={EditUser}/>*/}
        <Redirect from="*" to="/profile"/>
    </Switch>
)