import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class WordDetail extends Component {

  render() {
    if (!this.props.selectedWord) {
      return (<h4>Select a word...</h4>)
    }
    return (
    	<div>
    		<img src={this.props.selectedWord.image} />
    		<h3>{this.props.selectedWord.writtenForm}</h3>
    		<h3>Definition: {this.props.selectedWord.definition}</h3>
        <h3>Entry Date: {this.props.selectedWord.entryDate}</h3>
     	</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		selectedWord: state.selectedWordEntry
	};
}

export default connect(mapStateToProps)(WordDetail);