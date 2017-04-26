import React, {Component, Button} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {searchDictionary} from '../actions/searchDictionary'

class SearchBar extends Component {

	createListItems() {
		return(
			<form>
				<input type='text'/>
			</form>
		);
	}

	triggerSearch() {
		console.log('YAY')
		if(document.getElementById('searchField')) {
			this.props.searchDictionary(document.getElementById('searchField').value)
		}
		return;
	}

  render() {
      return (
      	<span>
      		<form>
						<input type='text' id='searchField'/>
					</form>
					<button onClick={this.triggerSearch()}>Search!</button>
				</span>
      )
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchDictionary: searchDictionary}, dispatch)
}

export default connect(mapDispatchToProps)(SearchBar);