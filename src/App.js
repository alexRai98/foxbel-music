import React from 'react';
import './App.css';
import Layout from './features/layout';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Sounds from './features/sounds'

function App() {
  return (
    <main className="App">
       <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Sounds} />
           
          </Switch>
        </Layout>
      </Router>
     
    </main>
  );
}

export default App;
