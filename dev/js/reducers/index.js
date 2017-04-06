import {combineReducers} from 'redux';
import WordEntryReducer from './reducer-word-entries';

const allReducers = combineReducers({
    wordEntries: WordEntryReducer
})

export default allReducers;