import React from 'react';
import './App.css';
import Layout from './features/layout';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Sounds from './features/sounds'

function App() {
  return (
    <div className="App">
       <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Sounds} />
           
          </Switch>
        </Layout>
      </Router>
     
    </div>
  );
}

export default App;
