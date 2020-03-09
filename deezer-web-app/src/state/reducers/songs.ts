import * as actionTypes from '../constants/index';
import Immutable from 'seamless-immutable';
import { ActionInterface } from '../interfaces/action.interface';

const initialState = Immutable({
    list: [],
    artist: '',
    isLoading: false,
    isEmpty: false
});

export const songs = (state = initialState, action: ActionInterface) => {
    switch(action.type) {
        case actionTypes.SET_SONGS:
            return state.set('list', action.payload);

        case actionTypes.SET_ARTIST:
            return state.set('artist', action.payload);

        case actionTypes.SET_LOADING:
            return state.set('isLoading', action.payload);

        case actionTypes.SET_EMPTY:
            return state.set('isEmpty', action.payload);

        default: return state;
    }
};