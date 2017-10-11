import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'

class ActionMenu extends Component {

  render() {
    return (
      <div className="list-of-actions">


      </div>
    )
  }
}


function mapStateToProps(state) {
	return {
		wordEntries: state.wordEntries,
    displayLanguage: state.displayLanguage
	};
}

export default connect(mapStateToProps)(ActionMenu);
