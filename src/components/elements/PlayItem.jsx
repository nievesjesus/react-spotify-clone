import React, { useContext, useRef } from 'react';
import { PlayerContext } from '../../contexts/PlayerContext';

const PlayItem = ({ track, index }) => {
    const { image, title, artist, album, audioSrc } = track
    const { playSongOnClick } = useContext(PlayerContext);
    const audioRef = useRef(new Audio(audioSrc));
    const { duration } = audioRef.current;
    console.log(audioRef)

    const convertToMinutes = (time) => {
        var minutes = Math.floor( time / 60 );
        var seconds = time % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        return minutes + ":" + Math.round(seconds);      
    }

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
            <td>{duration ? `${convertToMinutes(duration)}s` : '0.0s'}</td>
        </tr>
    );
}

export default PlayItem;
