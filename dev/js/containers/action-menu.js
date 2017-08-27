import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class ActionMenu extends Component {

  render() {
    return (
      <div id="list-of-actions">


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

export default ActionMenu;
