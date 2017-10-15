import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getLanguageString} from '../utils/language-helper'
//import request from 'request'

class ExportButton extends Component {
  
  render() {

    //language switching
    let string_Export = 'Export'
    if (this.props.displayLanguage) {
      string_Export = getLanguageString('menu', 'Export', this.props.displayLanguage, this.props.localisation)
    }

    //data prep
    if (this.props.searchResults) {
      let data = JSON.stringify(this.props.searchResults)
      let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(data)
      let link = document.getElementById('link').href = dataUri
    }

    return (
      <a className={'export_button'} href='#' id='link' download='export.json'>
        <button disabled={!this.props.searchResults}>{string_Export}</button>
      </a>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps)(ExportButton);