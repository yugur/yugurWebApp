import {combineReducers} from 'redux';
import WordEntryReducer from './reducer-word-entries';
import SelectedWordReducer from './reducer-selected-word'
import SelectedSearchedTerm from './reducer-searched-term'

const allReducers = combineReducers({
    wordEntries: WordEntryReducer,
    selectedWordEntry: SelectedWordReducer,
    searchResults: SelectedSearchedTerm
})

export default allReducers;