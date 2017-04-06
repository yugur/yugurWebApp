import {combineReducers} from 'redux';
import WordEntryReducer from './reducer-word-entries';
import SelectedWordReducer from './reducer-selected-word'

const allReducers = combineReducers({
    wordEntries: WordEntryReducer,
    selectedWordEntry: SelectedWordReducer
})

export default allReducers;