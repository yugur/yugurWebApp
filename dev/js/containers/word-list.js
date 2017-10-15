import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {getLanguageString} from '../utils/language-helper'

//let localisation = JSON.parse('../../assets/localisation.json')

// let request = new XMLHttpRequest();
// request.open("GET", "../../assets/localisation.json", false);
// request.send(null)
// let localisation = JSON.parse(request.responseText);
// console.log(localisation)

let string_WordEntries = 'Word Entries'
let string_SearchDictionary = 'Search the dictionary'

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
					{string_SearchDictionary}
				</div>
			)
		}
	}

  render() {
		console.log(this.props)

		//language switching
		
		if (this.props.displayLanguage) {
		  string_WordEntries = getLanguageString('menu', 'Results', this.props.displayLanguage, this.props.localisation)
		  string_SearchDictionary = getLanguageString('menu', 'SearchTheDictionary', this.props.displayLanguage, this.props.localisation)
		}

    return (
    	<div className={'selections'}>
      	<h2 className={'heading'}>{string_WordEntries}:</h2>
        <div className={'wordEntry'}>
      		<ul>
    				{this.createListItems()}
     			</ul>
        </div>
      </div>
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
