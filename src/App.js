import React, { Component } from 'react';
import Dashboard from './screens/dashboard'
import GoalScreen from './screens/goalScreen'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/goal" component={GoalScreen}/>
            </div>
        </Router>
    );
  }
}

export default App;
