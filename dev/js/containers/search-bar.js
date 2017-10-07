import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'
//import {lan} from '../../../test_language.json'

const lalng = require('../../../test_language.json');

class SearchBar extends Component {

  triggerSearch() {
    if(document.getElementById('searchField')) {
      console.log('Searching...')
      this.props.searchDictionary(document.getElementById('searchField').value)
    }
    return;
  }

  render() {
    let mySearchTrigger = this.triggerSearch.bind(this);
    return (
      <div id="search">


      	<form enctypr="text/plain">
      		<ul>
            <li>Words</li>
            <li>Semantics</li>
            <li>Alphabets</li>
            <li>
            <select name="languages">
              <option value="yugur">Yugur -> Yugur</option>
              <option value="english">English -> Yugur</option>
              <option value="chienese">中文 -> Yugur</option>
            </select>

            </li>
      			<li>
      				<input type="text" id="search_word" name="search_word" placeholder="Search" size="48" maxlength="200">
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

export default connect(null, mapDispatchToProps)(SearchBar);
