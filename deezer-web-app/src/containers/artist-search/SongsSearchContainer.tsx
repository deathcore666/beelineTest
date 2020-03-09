import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/input/index'
import Results from '../../components/results/index'

import { ActionsCreators } from '../../state/actions';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk'
interface PropsInterface {
    songs: any,
    artist: any,
    setArtist: any,
    fetchSongs: any,
    isLoading: any,
    isEmpty: any,
}
class SongsSearchContainer extends Component<PropsInterface, {}> {
    render() {
        return (
            <div>
                <Input setArtist={this.setArtist.bind(this)}
                       fetchSongs={this.fetchSongs.bind(this)}/>
                <Results list={this.props.songs.list}
                         artist={this.props.songs.artist}
                         isLoading={this.props.songs.isLoading}
                         isEmpty={this.props.songs.isEmpty}/>
            </div>
        );
    }

    public setArtist (name: string): void {
        this.props.setArtist(name);
    }

    public fetchSongs(artist: string): void {
        this.props.fetchSongs(artist);
    }
}
  
function mapStateToProps (state: any) {
    return state;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>,) => {
    const actions = {
        fetchSongs: ActionsCreators.fetchSongs,
        setArtist: ActionsCreators.setArtist,
        setSongs: ActionsCreators.setSongs,
    };
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsSearchContainer)