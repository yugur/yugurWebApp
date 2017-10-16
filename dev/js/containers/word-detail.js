import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import DeleteButton from '../containers/delete_button.js'
import {getLanguageString} from '../utils/language-helper'

class WordDetail extends Component {

  render() {
    //language switching
    let string_Definition = 'Definition'
    let string_Language = 'Language'
    let string_WordDetails = 'Word Details'
    let string_DeleteWord = 'Delete Word'
    let string_SelectAWord = 'Select a word'
    if (this.props.displayLanguage) {
      string_Definition = getLanguageString('menu', 'Definition', this.props.displayLanguage, this.props.localisation)
      string_Language = getLanguageString('menu', 'Language', this.props.displayLanguage, this.props.localisation)
      string_WordDetails = getLanguageString('menu', 'Selections', this.props.displayLanguage, this.props.localisation)
      string_DeleteWord = getLanguageString('menu', 'DeleteWord', this.props.displayLanguage, this.props.localisation)
      string_SelectAWord = getLanguageString('menu', 'SelectAWord', this.props.displayLanguage, this.props.localisation)
    }

    console.log(this.props.selectedWord)
    if (!this.props.selectedWord) {
      return (
        <div className={'results'}>
          <h2>{string_WordDetails}:</h2>
          <h4>{string_SelectAWord}</h4>
        </div>
      )
    }

    return (
      <div className={'results'}>
        <h2>{string_WordDetails}:</h2>
        <div>
          <img src={this.props.selectedWord.image} />
          <h1>{this.props.selectedWord.headword}</h1>
          <h3>{string_Definition}: {this.props.selectedWord.definition}</h3>
          <h5>{string_Language}: {this.props.selectedWord.hw_lang}</h5>
          <DeleteButton localisation={this.props.localisation} entryId={this.props.selectedWord.id}></DeleteButton>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		selectedWord: state.selectedWordEntry,
    displayLanguage: state.displayLanguage
	};
}

export default connect(mapStateToProps)(WordDetail);
