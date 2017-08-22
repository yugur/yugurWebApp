import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class SearchBar extends Component {

  render() {
      return (
				<div id="search">

							<form enctypr="text/plain" action="mailto:u5838661@anu.edu.au">
								<ul>
									<li>
								<input type="text" name="search_word" placeholder="Search" size="40" maxlength="50">

						</li>
						<li>GO</li>
							</form>
					</ul>
				</div>
      )
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(null, dispatch)
}

function mapStateToProps(state) {
	return {
		wordEntries: state.wordEntries
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
