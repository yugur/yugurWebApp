import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class LoginForm extends Component {

	register() {
		console.log('Logging in...')
		let uname = document.getElementById('username').value
		let pass = document.getElementById('password').value
		console.log('Username: '+document.getElementById('username').value)
		console.log('Password: '+document.getElementById('password').value)

		let url = 'http://139.59.118.165:8080/login'
		let params = 'username='+uname+'&password='+pass
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log('ready state changed')
		}
		xhttp.open('POST', url, true)
		xhttp.send(params);
	}

  render() {
      return (
      	<span>
      		<h2>Login</h2>
			    <div>
			      <label>Username:</label>
			      <input type="text" id='username' name="username" />
			    </div>
			    <div>
			      <label>Password:</label>
			      <input type="text" id='password' name="password" />
			    </div>
				  <button onClick={this.register}>
	  				Login
					</button>
				</span>
      );
  }
}

export default LoginForm;