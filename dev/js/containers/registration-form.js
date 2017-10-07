import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

//localisation
var now = [
  require('../../../test_language.json')
];


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
      		<h2>{now[0][7].Mandarin}</h2>
			    <div>
			      <label>{now[0][5].Mandarin}:</label>
			      <input type="text" id='username' name="username" />
			    </div>
			    <div>
			      <label>{now[0][6].Mandarin}:</label>
			      <input type="text" id='password' name="password" />
			    </div>
				  <button onClick={this.register}>
	  				{now[0][7].Mandarin}
					</button>
				</span>
      );
  }
}

export default RegistrationForm;
