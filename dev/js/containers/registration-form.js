import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RegistrationForm extends Component {

	register() {
		console.log('Registering...')
		let uname = document.getElementById('username').value
		let pass = document.getElementById('password').value
		console.log(uname)
		console.log(pass)

		let url = 'http://128.199.202.74:8080/register'
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

  render() {
      return (
      	<span>
      		<h2>Register New User</h2>
			    <div>
			      <label>Username:</label>
			      <input type="text" id='username' name="username" />
			    </div>
			    <div>
			      <label>Password:</label>
			      <input type="text" id='password' name="password" />
			    </div>
				  <button onClick={this.register}>
	  				Register
					</button>
				</span>
      );
  }
}

export default RegistrationForm;