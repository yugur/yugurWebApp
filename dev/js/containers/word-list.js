import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class WordList extends Component {

	createListItems() {
		if (this.props.searchResults) {
			let searchResults = JSON.parse(this.props.searchResults)
			console.log(searchResults)
			return this.props.searchResults.map((word) => {
				return (
					<li id="entry" key={word.id} onClick={() => this.props.selectWordEntry(word)}>
						{word.writtenForm}
					</li>
				);
			});
		} else {
			return (
				<div>
					Search the dictionary..
				</div>
			)
		}
	}

  render() {
  		console.log(this.props)
      return (
      	<ul>
      		{this.createListItems()}
       	</ul>
      )
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({selectWordEntry: selectWordEntry}, dispatch)
}

function mapStateToProps(state) {
	return {
		wordEntries: state.wordEntries,
		searchResults: state.searchResults
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
