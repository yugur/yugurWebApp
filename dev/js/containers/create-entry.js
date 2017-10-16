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
      definition: '',
      wordType: '',
      wordLanguage: '',
      definitionLanguage: ''
    }

    updateDefinition = updateDefinition.bind(this)
    updateHeadword = updateHeadword.bind(this)
    updateWordLanguage = updateWordLanguage.bind(this)
    updateDefinitionLanguage = updateDefinitionLanguage.bind(this)
    updateWordType = updateWordType.bind(this)
    formData = formData.bind(this)
  }
  
  render() {

    //language switching
    let string_Definition = 'Definition'
    let string_Headword = 'Headword'
    let string_AddAWord = 'Add a Word'
    let string_CreateWord = 'Create Word'
    let string_WordType = 'Word Type'
    let string_WordLanguage = 'Word Language'
    let string_DefinitionLanguage = 'Word Language'
    if (this.props.displayLanguage) {
      string_Definition = getLanguageString('menu', 'Definition', this.props.displayLanguage, this.props.localisation)
      string_Headword = getLanguageString('menu', 'Headword', this.props.displayLanguage, this.props.localisation)
      string_AddAWord = getLanguageString('menu', 'AddWord', this.props.displayLanguage, this.props.localisation)
      string_CreateWord = getLanguageString('menu', 'CreateWord', this.props.displayLanguage, this.props.localisation)
    }

    return (
      <section className={'mainView'} id={'comments'}>
        <h2 className={'heading'}>{string_AddAWord}</h2>
        <div id='createEntry' data-tip='Disabled'>
          <i>{string_Headword}: </i>
          <input type='text' id='create_entry_headword' onChange={updateHeadword} />
          <br />
          <i>{string_Definition}: </i>
          <input type='text' id='create_entry_definition' onChange={updateDefinition} />
          <br />
          <br />
          <i>{string_WordType}: </i>
          <input type='text' id='create_entry_wordType' onChange={updateWordType} />
          <br />
          <i>{string_WordLanguage}: </i>
          <input type='text' id='create_entry_wordLanguage' onChange={updateWordLanguage} />
          <br />
          <i>{string_DefinitionLanguage}: </i>
          <input type='text' id='create_entry_definitionLanguage' onChange={updateDefinitionLanguage} />
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

function updateWordType() {
  let definition = document.getElementById('create_entry_wordType').value

  this.setState({
    wordType: definition
  })
}

function updateWordLanguage() {
  let definition = document.getElementById('create_entry_wordLanguage').value

  this.setState({
    wordLanguage: definition
  })
}

function updateDefinitionLanguage() {
  let definition = document.getElementById('create_entry_definitionLanguage').value

  this.setState({
    definitionLanguage: definition
  })
}

function formData() {
  let data = {
    headword: this.state.headword,
    definition: this.state.definition,
    wordLanguage: this.state.wordLanguage,
    definitionLanguage: this.state.definitionLanguage,
    wordType: this.state.wordType
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