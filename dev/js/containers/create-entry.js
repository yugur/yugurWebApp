import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectWordEntry} from '../actions/selectWordEntry'
import {searchDictionary} from '../actions/searchDictionary'
import {createEntry} from '../utils/api-helper'
import CreateButton from './create-button.js'
import {getLanguageString} from '../utils/language-helper'
let {BASE_API_URL, REGISTER_ENDPOINT, LOGIN_ENDPOINT, STATUS_ENDPOINT, SEARCH_ENDPOINT, FETCH_ENDPOINT} = require('../constants')
//import request from 'request'

class CreateEntry extends Component {

  constructor() {
    super()
    this.state = {
      headword: '',
      definition: ''
    }

    updateDefinition = updateDefinition.bind(this)
    updateHeadword = updateHeadword.bind(this)
    formData = formData.bind(this)
  }
  
  render() {

    //language switching
    let string_Definition = 'Definition'
    let string_Headword = 'Headword'
    let string_AddAWord = 'Add a Word'
    let string_CreateWord = 'Create Word'
    if (this.props.displayLanguage) {
      string_Definition = getLanguageString('menu', 'Definition', this.props.displayLanguage, this.props.localisation)
      string_Headword = getLanguageString('menu', 'Headword', this.props.displayLanguage, this.props.localisation)
      string_AddAWord = getLanguageString('menu', 'AddWord', this.props.displayLanguage, this.props.localisation)
      string_CreateWord = getLanguageString('menu', 'CreateWord', this.props.displayLanguage, this.props.localisation)
    }

    return (
      <section className={'mainView'} id={'comments'}>
        <h2 className={'heading'}>{string_AddAWord}</h2>
        <div id='createEntry'>
          <i>{string_Headword}: </i>
          <input type='text' id='create_entry_headword' onChange={updateHeadword}/>
          <br />
          <i>{string_Definition}: </i>
          <input type='text' id='create_entry_definition' onChange={updateDefinition}/>
          <CreateButton localisation={this.props.localisation} data={formData()}></CreateButton>
        </div>
      </section>
    )
  }
}

function updateHeadword() {
  let headword = document.getElementById('create_entry_headword').value

  this.setState({
    headword: headword
  })
}

function updateDefinition() {
  let definition = document.getElementById('create_entry_definition').value

  this.setState({
    definition: definition
  })
}

function formData() {
  let data = {
    headword: this.state.headword,
    definition: this.state.definition
  }

  return data
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({searchDictionary: searchDictionary}, dispatch)
}

function mapStateToProps(state) {
  return {
    displayLanguage: state.displayLanguage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEntry);