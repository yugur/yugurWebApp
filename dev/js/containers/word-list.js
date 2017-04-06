import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class WordList extends Component {

	createListItems() {
		return this.props.wordEntries.map((word) => {
			return (
				<li key={word.id} onClick={() => this.props.selectWordEntry(word)}>
					{word.writtenForm}
				</li>
			);
		});
	}

  render() {
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
		wordEntries: state.wordEntries
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(WordList);