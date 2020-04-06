import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Profile from './Components/Profile';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Login} />
      </HashRouter>
    </div>
  );
}

export default App;
