import React, { Component } from 'react'

//import user from '../../assets/img/USUARIO_BLACK.png'

class Feed extends Component {
    render(){
        

        return (
            <main className="main white">
                 <ul class="collection">
                    <li class="collection-item avatar">
                        <i class="material-icons circle blue">person_pin</i>
                        <span class="title"> <h6>User | Title | Technology</h6></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                    <li class="collection-item avatar">
                        <i class="material-icons circle">person_pin</i>
                        <span class="title"><h6>User | Title | Technology</h6></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                    <li class="collection-item avatar">
                        <i class="material-icons circle green">person_pin</i>
                        <span class="title"><h6>User | Title | Technology</h6></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                    <li class="collection-item avatar">
                        <i class="material-icons circle red">person_pin</i>
                        <span class="title"><h6>User | Title | Technology</h6></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </li>
                </ul>
            </main>
        )
    }
}

export default Feed