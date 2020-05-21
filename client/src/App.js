import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from './pages/Login';
import Profile from './pages/Profile';
import OnboardingDocumentation from './pages/OnboardingDocumentation';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
        
        <Switch>
          
          <Route path="/login" component={ Login } />
          <Route path="/profile" component={ Profile } />
          <Route path="/onboarding-documentation" component={ OnboardingDocumentation } />
        </Switch>
        <div className="container">
          <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/onboarding-documentation">Onboarding Documentation</Link>
        </div>
        
      </BrowserRouter>

      
    </div>
  );
}

export default App;
