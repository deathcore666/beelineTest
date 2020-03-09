import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './state/store/index'
import SongsSearchContainer from './containers/artist-search/SongsSearchContainer'

class App extends Component {
    public render () {
        return (
            <div>
              <Provider store={store}>
                <BrowserRouter>
                  <Switch>
                        <Route path="/" component={ SongsSearchContainer }/>
                    </Switch>
                </BrowserRouter>
              </Provider>
            </div>
        );
      }
}

export default App;
