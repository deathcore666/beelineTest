import { combineReducers } from 'redux';
import { songs } from './songs';

const reducers = combineReducers({
    songs: songs,
});

export default reducers;