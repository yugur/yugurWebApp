import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DeleteButton from '../containers/delete_button.js'

class WordDetail extends Component {

  render() {
    console.log(this.props.selectedWord)
    if (!this.props.selectedWord) {
      return (<h4>Select a word...</h4>)
    }
    return (
    	<div>
    		<img src={this.props.selectedWord.image} />
    		<h1>{this.props.selectedWord.headword}</h1>
    		<h3>Definition: {this.props.selectedWord.definition}</h3>
        <h5>Language: {this.props.selectedWord.hw_lang}</h5>
        <DeleteButton entryId={this.props.selectedWord.id}></DeleteButton>
     	</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		selectedWord: state.selectedWordEntry,
    displayLanguage: state.displayLanguage
	};
}

export default connect(mapStateToProps)(WordDetail);
