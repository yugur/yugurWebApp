import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

//let localisation = JSON.parse('../../assets/localisation.json')

// let request = new XMLHttpRequest();
// request.open("GET", "../../assets/localisation.json", false);
// request.send(null)
// let localisation = JSON.parse(request.responseText);
// console.log(localisation)

class WordList extends Component {

	createListItems() {
		if (this.props.searchResults) {
			console.log(this.props.searchResults)
			let searchResults = JSON.parse(this.props.searchResults)
			console.log(searchResults)

			if (searchResults !== null) {
				return searchResults.map((word) => {
					return (
						<li id="entry" key={word.id} onClick={() => this.props.selectWordEntry(word)}>
							{word.headword}
						</li>
					);
				});
			}
			
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
		searchResults: state.searchResults,
		displayLanguage: state.displayLanguage
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList);
