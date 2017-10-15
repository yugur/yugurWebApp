import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLanguageString} from '../utils/language-helper'

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

  	//language switching
    let string_Username = 'Username'
    let string_Password = 'Password'
    let string_Login = 'Login'
    if (this.props.displayLanguage) {
      string_Username = getLanguageString('menu', 'Username', this.props.displayLanguage, this.props.localisation)
      string_Password = getLanguageString('menu', 'Password', this.props.displayLanguage, this.props.localisation)
      string_Login = getLanguageString('menu', 'Login', this.props.displayLanguage, this.props.localisation)
    }

    return (
    	<span>
    		<h2>{string_Login}</h2>
		    <div>
		      <label>{string_Username}:</label>
		      <input type="text" id='username' name="username" disabled/>
		    </div>
		    <div>
		      <label>{string_Password}:</label>
		      <input type="text" id='password' name="password" disabled/>
		    </div>
			  <button onClick={this.register} disabled>
  				{string_Login}
				</button>
				{/*<button onClick={this.getStatus}>
  				Status?
				</button>*/}
			</span>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps)(LoginForm);