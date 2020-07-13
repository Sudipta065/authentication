import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Private from './components/Private';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Login} />

        <Route path='/private' component={Private} />

        <Route path='/logout' component={Logout} />
      </Switch>
    </div>
  );
}

export default App;

/**
 *   <Switch>
        <Route path='/' component={Login} />

        <Route path='/private' component={Private} />

        <Route path='/logout' component={Logout} />
      </Switch>
 */
