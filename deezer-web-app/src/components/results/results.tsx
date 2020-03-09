import React, {Component} from 'react';
import moment from 'moment';
import './results.scss'
import * as textConsts from '../../const/textValues';

interface ListProps {
    list: string[];
    artist: string;
    isLoading: boolean;
    isEmpty: boolean;
}

class ResultsList extends Component<ListProps, {}> {
    private totalDuration: number = 0;

    public formatArtist(artist: string): { mainArtist: string; featuredArtist?: string; } {
        const mainArtist: string = this.props.artist;
        if (artist.toLowerCase() !== mainArtist.toLowerCase()) {
            return {
                mainArtist,
                featuredArtist: artist
            };
        }
        return { mainArtist: artist };
    }   


    render() {
        if (this.props.isEmpty) {
            return (
                <div className="loading-container">
                    {textConsts.notFound}
                </div>
            );
        }

        if (this.props.isLoading) {
            return (
                <div className="loading-container">
                    {textConsts.loading}
                </div>
            );
        }

        if (this.props.list.length === 0) {
            return (
                <div className="results-container">
                </div>
            );
        }
        // todo move format and duration calc to didrecieveprops
        return (
            <div key="res-cont" className="results-container">
                <div key="list-cont" className="results-list">{
                    this.props.list.map((song: any, i: number) => {
                        const artist = this.formatArtist(song.artist.name);
                        this.totalDuration += song.duration;
                        return <div className="list-item" key={song.artist.id + i}>
                                    <img src={song.album.cover_small} alt="album cover"></img>
                                    <div className="song-info">
                                        <div key={i}>{song.title_short}</div>
                                        <div className="artist" key={i+'artist'}>
                                            <div className="artist-title">{artist.featuredArtist ? textConsts.artists + ' ' : textConsts.artist + ' '}</div> 
                                            {artist.mainArtist}{artist.featuredArtist ? ', ' + artist.featuredArtist : ''}
                                        </div>
                                    </div>
                                    <div key={i+'duration'}>{ moment().startOf('day')
                                                    .seconds(song.duration)
                                                    .format('mm:ss') }
                                    </div>
                                </div>;
                    })
                }</div>
                <div className="duration">{textConsts.totalDuration}{moment().startOf('day').seconds(this.totalDuration).format('mm:ss')}</div>
            </div>
        );
    }
};

export default ResultsList;
