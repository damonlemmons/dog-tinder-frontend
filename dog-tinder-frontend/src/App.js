import React, { Component } from 'react';
import Dogs from './pages/Dogs';
import NewDog from './pages/NewDog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }

  handleNewDog(data) {
  console.log(data);
}

  render() {
    return (
      <div>
          <Header />
          <Router>
              <Switch>
                  <Route exact path="/dogs" render={ (props) => <Dogs dogs={this.state.dogs}/> } />
                  <Route exact path="/" render={ (props) => <NewDog handleDog={this.handleNewDog.bind(this)} /> } />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
