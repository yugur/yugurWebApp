import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeDisplayLanguage} from '../actions/changeDisplayLanguage'

class LanguageSwitcher extends Component {

  changeLanguage() {
    if (document.getElementById('languageSelecter')) {
      let chosenLanguage = document.getElementById('languageSelecter').value
      console.log(chosenLanguage)
      if (chosenLanguage) {
        console.log(this.props)
        this.props.changeDisplayLanguage(chosenLanguage)  
      }
    }
  }

  render() {
      let changeLanguage = this.changeLanguage.bind(this)

      return (
      	<span>
      		<h2>Select Language</h2>
			    <div>
            <select id='languageSelecter' name='languages' onChange={changeLanguage}>
              <option value='english'>English</option>
              <option value='chinese'>Chinese</option>
              <option value='yugur'>Yugur</option>
            </select>
			    </div>
				</span>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeDisplayLanguage: changeDisplayLanguage}, dispatch)
}

export default connect(null, mapDispatchToProps)(LanguageSwitcher);