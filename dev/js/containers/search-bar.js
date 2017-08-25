import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class SearchBar extends Component {

  render() {
    return (
      <div id="search">

      <form enctypr="text/plain">
      <ul>

      <li>
      <input type="text" name="search_word" placeholder="Search" size="40" maxlength="50">
      </input>
      </li>

      <li><button type="button">Go</button></li>
      </ul>
      </form>

      </div>
    )
  }
}

{/*function mapDispatchToProps(dispatch) {
	return bindActionCreators(null, dispatch)
}

function mapStateToProps(state) {
	return {
		wordEntries: state.wordEntries
	};
}*/}

export default SearchBar;
