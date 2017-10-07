import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'

//const lalng = require('../../../test_language.json');

//localisation
var now = [
  require('../../../test_language.json')
];

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
              <option value="yugur">{now[0][11].Mandarin}</option>
              <option value="english">{now[0][12].Mandarin}</option>
              <option value="chienese">{now[0][13].Mandarin}</option>
            </select>

            </li>
      			<li>
      				<input type="text" id="search_word" name="search_word" placeholder={now[0][9].Mandarin} size="48" maxlength="200">
      			  </input>
      		  </li>
      		 <li><button type="button" onClick={mySearchTrigger}>{now[0][9].Mandarin}</button></li>
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
