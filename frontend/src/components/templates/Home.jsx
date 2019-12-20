import React, { Fragment } from 'react'
import Logo from '../../assets/img/LOGOKBASE.png'

export default props => (
    <Fragment>
        <aside className="aside">
            <h1>bem vindo</h1>
            <h2>ikbase</h2>
        </aside>
        <main className="main">
            <img src={Logo} alt="Logo by m.m.groovy (meu amigo) follow him on instagram!" />
        </main>
    </Fragment>
)