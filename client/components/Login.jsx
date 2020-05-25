import React, { Component } from 'react';
import Auth from './Auth'

class Login extends Component {
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
    const { email, password } = this.state;

    fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if (res.status === 401) {
        this.setState({
          warning: 'Invalid Username or Password',
        });
      } else if (res.status === 406) {
        this.setState({ 
          warning: 'User not found try again' 
        });
      } else {
        Auth.login(() => {
          this.props.history.push('/portfolio');
        }, email)
      }
    })
    .catch((err) => console.log(err));
  }

  register = () =>{
    this.props.history.push('/register')
  }

  render(){
    return (
      <div>
        <div>
          <label>Login</label>
          <hr />
        </div>
        <div className='container'>
          <label>Email</label>
          <input type='text' placeholder='Enter Email' id='email' name='email' onChange={ this.handleChange }/>

          <label>Password</label>
          <input type='password' placeholder='Enter Password' id='password' name='psw' onChange={ this.handleChange }/>

          <p>{ this.state.warning }</p>

          <button onClick={ this.handleClick }>Login</button>
          <button onClick={ this.register }>Register</button>
        </div>
      </div>
    );
  }
}

export default Login;