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
    let string_DefinitionLanguage = 'Definition Language'

    let string_English = 'English'
    let string_Chinese = 'Chinese'
    let string_Yugur = 'Yugur'

    let string_Noun = 'Noun'
    let string_Adjective = 'Adjective'
    let string_Verb = 'Verb'

    if (this.props.displayLanguage) {
      string_Definition = getLanguageString('menu', 'Definition', this.props.displayLanguage, this.props.localisation)
      string_Headword = getLanguageString('menu', 'Headword', this.props.displayLanguage, this.props.localisation)
      string_AddAWord = getLanguageString('menu', 'AddWord', this.props.displayLanguage, this.props.localisation)
      string_CreateWord = getLanguageString('menu', 'CreateWord', this.props.displayLanguage, this.props.localisation)

      string_WordType = getLanguageString('menu', 'WordType', this.props.displayLanguage, this.props.localisation)
      string_WordLanguage = getLanguageString('menu', 'WordLanguage', this.props.displayLanguage, this.props.localisation)
      string_DefinitionLanguage = getLanguageString('menu', 'DefinitionLanguage', this.props.displayLanguage, this.props.localisation)

      string_English = getLanguageString('menu', 'English', this.props.displayLanguage, this.props.localisation)
      string_Chinese = getLanguageString('menu', 'Chinese', this.props.displayLanguage, this.props.localisation)
      string_Yugur = getLanguageString('menu', 'Yugur', this.props.displayLanguage, this.props.localisation)

      string_Noun = getLanguageString('menu', 'Noun', this.props.displayLanguage, this.props.localisation)
      string_Adjective = getLanguageString('menu', 'Adjective', this.props.displayLanguage, this.props.localisation)
      string_Verb = getLanguageString('menu', 'Verb', this.props.displayLanguage, this.props.localisation)
    }

    return (
      <section className={'mainView'} id={'comments'}>
        <h2 className={'heading'}>{string_AddAWord}</h2>
        <div id='createEntry' data-tip='Disabled'>
          {string_Headword}:<br/>
          <input type='text' id='create_entry_headword' onChange={updateHeadword} />
          <br />
          {string_Definition}:<br/>
          <input type='text' id='create_entry_definition' onChange={updateDefinition} />
          <br />
          <br />
          {string_WordType}:<br/>
          <select id='create_entry_wordType' onChange={updateWordType}>
            <option value={'noun'}>{string_Noun}</option>
            <option value={'verb'}>{string_Verb}</option>
            <option value={'adjective'}>{string_Adjective}</option>
          </select>
          <br />
          {string_WordLanguage}:<br/>
          <select id='create_entry_wordLanguage' onChange={updateWordLanguage}>
            <option value={'en-AU'}>{string_English}</option>
            <option value={'zh'}>{string_Chinese}</option>
            <option value={'yge'}>{string_Yugur}</option>
          </select>
          <br />
          {string_DefinitionLanguage}:<br/>
          <select id='create_entry_definitionLanguage' onChange={updateDefinitionLanguage}>
            <option value={'en-AU'}>{string_English}</option>
            <option value={'zh'}>{string_Chinese}</option>
            <option value={'yge'}>{string_Yugur}</option>
          </select>
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