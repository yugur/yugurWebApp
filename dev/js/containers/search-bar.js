import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'
import {searchDictionaryByWord} from '../utils/api-helper'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')
//import request from 'request'

class SearchBar extends Component {

  triggerSearch() {
    if(document.getElementById('searchField')) {

      console.log(this.props)
      if (this.props.displayLanguage) {
        console.log('LANG', this.props.displayLanguage)
      }

      console.log('Searching...')

      let searchTerm = document.getElementById('searchField').value

      console.log('Search Term: ', searchTerm)
      let searchResults// = 'g' //searchDictionaryByWord(searchTerm)

      console.log('Before')
      console.log(this.props)
      let searchResponse = searchDictionaryByWord(searchTerm, this.props.searchDictionary)
      //let searchResponse = 'fire: a flame'
      console.log('After')

      //this.props.searchDictionary(searchResponse)
      console.log('after reducer')
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
    let mySearchTrigger = this.triggerSearch.bind(this);

    return (
      <div id='search'>

      	<form>
      		<ul>
            <li>Words</li>
            <li>Semantics</li>
            <li>Alphabets</li>
            <li>
            <select name='languages'>
              <option value='yugur'>Yugur -> Yugur</option>
              <option value='english'>English -> Yugur</option>
              <option value='chienese'>Chinese -> Yugur</option>
            </select>

            </li>
      			<li>



      				<input type="text" id="searchField" name="search_word" placeholder="Search" size="48" maxLength="200">
      			  </input>
      		  </li>
      		 <li><button type="button" onClick={mySearchTrigger}>Search</button></li>

      	 </ul>
        </form>

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
