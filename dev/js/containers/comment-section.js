import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class Comment extends Component {

  render() {
    return (
      <div className="comment">


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

export default Comment;
