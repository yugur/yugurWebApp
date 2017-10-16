import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateEntry} from '../utils/api-helper'
import {getLanguageString} from '../utils/language-helper'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')
//import request from 'request'

class EditButton extends Component {

  triggerEdit() {
    if(document.getElementById('searchField')) {
      console.log('Deleting...')
      console.log(this.props)
      let data = this.props.data

      updateEntry(data)
      
    }
    return;
  }
  
  render() {

    //language switching
    let string_EditWord = 'Edit Word'
    if (this.props.displayLanguage) {
      string_EditWord = getLanguageString('menu', 'DeleteWord', this.props.displayLanguage, this.props.localisation)
    }

    let myEditTrigger = this.triggerEdit.bind(this);
    return (
      <div id='delete'>
        <button onClick={myEditTrigger}>{string_EditWord}</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps)(EditButton);