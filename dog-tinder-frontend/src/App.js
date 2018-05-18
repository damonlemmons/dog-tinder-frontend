import React, { Component } from 'react';
import Dogs from './pages/Dogs';
import NewDog from './pages/NewDog';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { getDogs } from './api'
import { createDogs } from './api'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: [],
      newDogSuccess: false
    }
  }

  componentWillMount() {
    getDogs()
    .then(APIdogs => {
      this.setState({
        dogs: APIdogs
      })
    })
  }

  handleNewDog(newDogInfo) {
    console.log("New Dog TRY", newDogInfo)
    createDogs(newDogInfo)
    .then(successDog => {
      console.log("CREATE SUCCESS!", successDog);
      this.setState({
        newDogSuccess: true
      })
    })
  }



  render() {
    return (
      <div>
          <Header />
          <Router>
              <Switch>
                  <Route exact path="/dogs" render={ (props) => <Dogs dogs={this.state.dogs}/> } />
                  <Route exact path="/" render={ (props) => <NewDog success={this.state.newDogSuccess} handleDog={this.handleNewDog.bind(this)} /> } />
              </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
