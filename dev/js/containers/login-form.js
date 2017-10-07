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

		let url = 'http://128.199.202.74:8080/login'
		//let params = 'username='+uname+'&password='+pass
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log('ready state changed')
		}
		xhttp.open('POST', url, true)
		xhttp.withCredentials = true
		xhttp.setRequestHeader('username', uname)
		xhttp.setRequestHeader('password', pass)
		console.log(xhttp)
		xhttp.send();
	}

	getStatus() {
		let url = 'http://128.199.202.74:8080/status'
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			console.log('ready state changed')
		}
		xhttp.open('GET', url, true)
		xhttp.send();
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
					<button onClick={this.getStatus}>
	  				Status?
					</button>
				</span>
      );
  }
}

export default LoginForm;
