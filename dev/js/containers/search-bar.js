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
      console.log('ggggg')
      this.props.searchDictionary(document.getElementById('searchField').value)
    }
    return;
  }

  render() {
      let mySearchTrigger = this.triggerSearch.bind(this);

      return (
        <span>
          <form>
            <input type='text' id='searchField'/>
          </form>
          <button onClick={mySearchTrigger}>Search!</button>
        </span>
      )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchDictionary: searchDictionary}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);