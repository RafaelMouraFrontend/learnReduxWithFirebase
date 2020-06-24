import React, {Component} from 'react';

class SignUp extends Component {
  state ={
    password: '',
    email: '',
    firstName:'',
    lastName: ''
  }
  handleChanged = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign in</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={this.handleChanged}/>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handleChanged}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" onChange={this.handleChanged}/>
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" onChange={this.handleChanged}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp