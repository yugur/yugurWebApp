import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeDisplayLanguage} from '../actions/changeDisplayLanguage'
import {getLanguageString} from '../utils/language-helper'

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

      //language switching
      let string_English = 'English'
      let string_Chinese = 'Chinese'
      let string_SelectLanguage = 'Select Language'
      let string_Korean = 'Korean'
      console.log(this.props)
      if (this.props.displayLanguage) {
        string_Chinese = getLanguageString('menu', 'Chinese', this.props.displayLanguage, this.props.localisation)
        string_English = getLanguageString('menu', 'English', this.props.displayLanguage, this.props.localisation)
        string_Korean = getLanguageString('menu', 'Korean', this.props.displayLanguage, this.props.localisation)
        string_SelectLanguage = getLanguageString('menu', 'SelectLanguage', this.props.displayLanguage, this.props.localisation)
      }

      return (
      	<span>
      		<h2>{string_SelectLanguage}</h2>
			    <div>
            <select id='languageSelecter' name='languages' onChange={changeLanguage}>
              <option value='English'>{string_English}</option>
              <option value='Mandarin'>{string_Chinese}</option>
              <option value='Korean'>{string_Korean}</option>
            </select>
			    </div>
				</span>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeDisplayLanguage: changeDisplayLanguage}, dispatch)
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);