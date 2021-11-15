import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import SingleCompany from './pages/SingleCompanyPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/products/:id' children={<SingleCompany />} />
      </Switch>
    </Router>
  );
}

export default App;
