import React from 'react';
import tracks from "../../services/Tracks";
import PlayItemList from '../elements/PlayItemList';

const PlayListContainer = () => {

    return (
        <div className='playlist-container'>
            <h1>Playlist</h1>
            <PlayItemList tracks={tracks} />
        </div>
    );
}

export default PlayListContainer;
