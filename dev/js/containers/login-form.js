import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//localisation
var now = [
  require('../../../test_language.json')
];

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
      		<h2>{now[0][4].Mandarin}</h2>
			    <div>
			      <label>{now[0][5].Mandarin}:</label>
			      <input type="text" id='username' name="username" />
			    </div>
			    <div>
			      <label>{now[0][6].Mandarin}:</label>
			      <input type="text" id='password' name="password" />
			    </div>
				  <button onClick={this.register}>
	  				{now[0][4].Mandarin}
					</button>
					<button onClick={this.getStatus}>
	  				Status?
					</button>
				</span>
      );
  }
}

export default LoginForm;
