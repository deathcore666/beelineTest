import React, { Component } from 'react';
import * as textConsts from '../../const/textValues';
import { ReactComponent as Tool } from '../../assets/tool.svg';
import './input.scss'

interface ArtistProps {
    setArtist: any;
    fetchSongs: any
}

class Input extends Component<ArtistProps, {}> {
    private artist: string = '';
    render() {
        return(
            <div className="input-container">
                <div className="input-wrapper">
                    <input 
                        type="text" 
                        className="input-field"
                        placeholder={textConsts.palceholder}
                        onChange={this.setArtist.bind(this)} 
                    />
                    <Tool onClick={this.initFetch.bind(this)}/>
                </div>
            </div>
        );
    }

    public setArtist(event: any): void {
        this.artist = event.target.value;
    }

    public initFetch(): void {
        this.props.setArtist(this.artist);
        this.props.fetchSongs(this.artist);
    }
}

export default Input;