import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'
import {deleteEntry} from '../utils/api-helper'
import {getLanguageString} from '../utils/language-helper'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')
//import request from 'request'

class DeleteButton extends Component {

  triggerDelete() {
    if(document.getElementById('searchField')) {
      console.log('Deleting...')
      console.log(this.props)
      let entryId = this.props.entryId

      console.log('Dleete Term: ', entryId)
      let deleteResult// = 'g' //searchDictionaryByWord(searchTerm)

      deleteEntry(entryId)
      
      // let url = BASE_API_URL+SEARCH_ENDPOINT+'?q='+searchTerm
      // let xhttp = new XMLHttpRequest();
      // xhttp.onreadystatechange = function() {
      //   console.log('ready state changed')
      //   console.log(xhttp)
      //   if (this.readyState == 4 && this.status == 200) {
      //     console.log(xhttp.responseText)
      //   }
      // }
      // xhttp.open('GET', url, true)
      // //xhttp.setRequestHeader('q', searchTerm)
      // console.log(xhttp)
      // xhttp.send();
      //this.props.searchDictionary(searchResults)
      
    }
    return;
  }
  
  render() {

    //language switching
    let string_DeleteWord = 'Delete Word'
    if (this.props.displayLanguage) {
      string_DeleteWord = getLanguageString('menu', 'DeleteWord', this.props.displayLanguage, this.props.localisation)
    }

    let myDeleteTrigger = this.triggerDelete.bind(this);
    return (
      <div id='delete'>
        <button onClick={myDeleteTrigger}>{string_DeleteWord}</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchDictionary: searchDictionary}, dispatch)
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);