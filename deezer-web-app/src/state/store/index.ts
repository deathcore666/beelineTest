import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import thunk from 'redux-thunk'

import reducers from '../reducers/index';


const configureStore = (initalState: any) => {
    return createStore(
        reducers,
        initalState,
        applyMiddleware(thunkMiddleware, thunk)
    );
}

const store = configureStore({});

export default store;