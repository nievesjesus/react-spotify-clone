import React, { useContext } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

const PlayItem = ({ track, index }) => {
    const { image, title, artist, album, audioSrc } = track
    const { playSongOnClick } = useContext(PlayerContext);
    return (
        <tr onClick={() => { playSongOnClick(index) }}>
            <td>
                <img src={image} alt="artwork" className='playlist-artwork'/>
            </td>
            <td>
                <div className='playlist-song-name'>{title}</div>
                <div className='playlist-song-artis'>{artist}</div>
            </td>
            <td>{album}</td>
            <td>asdasdasd</td>
        </tr>
    );
}

export default PlayItem;
