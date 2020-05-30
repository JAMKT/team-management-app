import React, { useState, useCallback,  useEffect } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import axios from 'axios';

import Login from './pages/Login';
import Profile from './pages/Profile';
import OnboardingDocumentation from './pages/OnboardingDocumentation';

import { AuthContext } from './components/context/authContext';

const App = () => {
  const [loggedIn, setLoggedIn ] = useState(null);
  const [currUser, setCurrUser] = useState(false);

  // Login
  const login = useCallback((user) => {
    setLoggedIn(true);
    setCurrUser(user);
  }, []);
 
  // Logout
  const logout = () => {
    setLoggedIn(false);
    setCurrUser(null);
    window.location.href = '/login';
  };

  // Get the current user
  const getCurrentUser = () => {
    axios.get('/api/users/current-user')
      .then((currentUser) => {
        if (currentUser.data.username) {
          const loggedInUser = currentUser.data;
          login(loggedInUser);
       
          return true;  
        } else {
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        return false;
      });
  };

  // Get current user's status
  async function status() {
    let status = false;

    return (loggedIn === false && loggedIn === null) ? status = await getCurrentUser() :
              (loggedIn === undefined) ? status = false :
                (loggedIn === true) ? status = true :
                  status
  }

  // Authorization
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      status() ? <Component {...props} /> : <Redirect to="/login" />
    )} />
  );

  // Keep the user logged in if there is a cookie
  useEffect(() => {
    if (document.cookie.sid) {
      getCurrentUser();
    }
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{loggedIn: loggedIn, login: login, logout: logout, currUser: currUser}}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={ Login } />
            <PrivateRoute path="/profile" component={ Profile } />
            <PrivateRoute path="/onboarding-documentation" component={ OnboardingDocumentation } />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
