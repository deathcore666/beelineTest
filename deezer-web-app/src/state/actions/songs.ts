import * as actionTypes from '../constants';
import axios from 'axios';

export const fetchSongs = (artist: string) => {
    return async (dispatch: any) => {
        return new Promise<void>( async (resolve) => {
            dispatch(setEmpty(false));
            dispatch(setLoading(true));
            const res = await axios.get(`http://localhost:8081/?q=${encodeURI(artist)}`);
            console.log(res.data)
            dispatch(setLoading(false));
            if (res.data.total === 0) {
                return dispatch(setEmpty(true));
            }
            dispatch({
                type: actionTypes.SET_SONGS,
                payload: res.data.data
            });
        });
    };
}

export const setLoading = (isLoading: boolean) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_LOADING,
            payload: isLoading
        });
    };
}

export const setArtist = (artist: string) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_ARTIST,
            payload: artist
        });
    };
}

export const setSongs = (songs: string[]) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_SONGS,
            payload: songs
        });
    };
}

export const setEmpty = (isEmpty: boolean) => {
    return (dispatch: (arg0: { type: any; payload: any; }) => void) => {
        dispatch({
            type: actionTypes.SET_EMPTY,
            payload: isEmpty
        });
    };
}