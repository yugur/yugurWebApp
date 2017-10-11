import {combineReducers} from 'redux';
import WordEntryReducer from './reducer-word-entries';
import SelectedWordReducer from './reducer-selected-word'
import SelectedSearchedTerm from './reducer-searched-term'
import DisplayLanguage from './reducer-display-language'

const allReducers = combineReducers({
    wordEntries: WordEntryReducer,
    selectedWordEntry: SelectedWordReducer,
    searchResults: SelectedSearchedTerm,
    displayLanguage: DisplayLanguage
})

export default allReducers;