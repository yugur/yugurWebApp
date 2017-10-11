import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'
import {createEntry} from '../utils/api-helper'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')
//import request from 'request'

class CreateButton extends Component {

  triggerCreate() {
    if(document.getElementById('searchField')) {
      console.log('Creating...')
      console.log(this.props)
      let data = this.props.data

      console.log('Creating Term: ', data)
      let createResult// = 'g' //searchDictionaryByWord(searchTerm)

      createEntry(data)
      
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
    let data = {
      headword: 'newWord',
      definition: 'a job well done'
    }

    let myCreateTrigger = this.triggerCreate.bind(this);

    return (
      <div id='createEntry'>
        <button onClick={myCreateTrigger}>Create Word</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);