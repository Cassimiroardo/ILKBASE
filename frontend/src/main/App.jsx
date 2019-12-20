import React ,{ Fragment } from 'react';
import {HashRouter} from 'react-router-dom'
import Routes from './Routes'

import './App.css';
import Nav from '../components/templates/Nav'


function App() {
  return (
    
    <HashRouter>
      <div className="App">
        <Nav/>
        <Fragment>
          <Routes/>
        </Fragment>
      </div>
    </HashRouter>
    
  );
}

export default App;
