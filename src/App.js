import React from 'react';
import Landing from './components/landing/landing';
import Header from './components/layout/header';
import Dashboard from './components/dashboard/dashboard';
import MyAccount from './components/myAccount';
import Contact from './components/contact';
import Login from './components/login';

//icons
import {library} from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';




import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {AuthProvider} from './contextProviders/auth';
import RouteGuard from './HoC/routeGuard';

library.add(
  faUser
);



function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact               component = {Landing} />
          <RouteGuard path="/dashboard"       component = {Dashboard} />
          <Route path="/contact"              component = {Contact} />
          <RouteGuard path="/myAccount"       component = {MyAccount} /> 
          <Route path="/login"                component ={Login} />
        </Switch>
    </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
