import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';

class NewDog extends Component {
  constructor(props){
  super(props)
  this.state = {
    form:{
      name: '',
      age: '',
      enjoys: ''
    }
  }
}

handleChange(event){
let {form } = this.state
form[event.target.name] = event.target.value
this.setState({form: form})
}

handleSubmit(event) {
  event.preventDefault()
  this.props.handleDog(this.state.form)
}


  render() {
      return (
        <div>
        <form>
        <FormControl
        type="text"
        name="name"
        placeholder="name"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.name}
        />

        <FormControl
        type="text"
        name="age"
        placeholder="age"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.age}
        />

        <FormControl
        type="text"
        name="enjoys"
        placeholder="enjoys"
        onChange={this.handleChange.bind(this)}
        value={this.state.form.enjoys}
        />

        <FormControl
        type="submit"
        name="create dog"
        placeholder="Create Dog"
        onClick={this.handleSubmit.bind(this)}
        />


        </form>
        </div>
)

  }
}


export default NewDog;
