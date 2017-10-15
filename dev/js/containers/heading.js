import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLanguageString} from '../utils/language-helper'

class Heading extends Component {

  render() {
  	//language switching
    let string_WelcomeToYugurio = 'Yugur Online Dictionary'
    if (this.props.displayLanguage) {
      string_WelcomeToYugurio = getLanguageString('menu', 'AppBanner', this.props.displayLanguage, this.props.localisation)
    }

    return (
    	<h1>{string_WelcomeToYugurio}</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps)(Heading);