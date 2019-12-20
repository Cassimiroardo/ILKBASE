import React  from 'react'
import UsuarioImg from '../../assets/img/USUARIO_IMG.png'

export default props => (

            <aside className="aside">
                <div className="center">
                    <h3>{props.userName}</h3>
                    <h3>{props.userEmail}</h3>
                    <img src={UsuarioImg} className="user-img" alt="logo bro"/>
                </div>
                <div className="post-box">
                    <h3>posts <br/>0</h3>
                </div>
            </aside>
)

