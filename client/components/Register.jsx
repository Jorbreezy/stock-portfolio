import React, { Component } from 'react';
import Auth from './Auth'

class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      warning: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = () => {
    const { email, password} = this.state;

    fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if(res.status === 409){
        this.setState({ warning: 'User already exists' })
      } else {
        this.props.history.push('/login')
      }
    })
    .catch(err => { console.log(err) })

  } 

  login = () => {
    this.props.history.push('/login')
  }

  render(){
    return (
      <div>
        <div>
          <label>Register</label>
          <hr />
        </div>
        <div className='container'>
          <label>Email</label>
          <input type='text' placeholder='Enter Email' id="email" name='email' onChange={ this.handleChange }/>

          <label>Password</label>
          <input type='password' placeholder='Enter Password' id="password" name='psw' onChange={ this.handleChange }/>

          <p>{ this.state.warning }</p>

          <button onClick={ this.handleClick }>Register</button>
          <button onClick={ this.login }>login</button>
        </div>
      </div>
    );
  }
}

export default Register;