import React from 'react';
import PlayItem from './PlayItem';

const PlayItemList = ({ tracks }) => {

    return (
        <div>
            <div>
                <table className="playlist-table">
                        <tr className='playlist-header'>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Duration</th>                            
                        </tr>
                        {tracks.map((track, index) => { return(<PlayItem key={index} index={index} track={track}/>) })}
                    </table>
            </div>
        </div>
    );
}

export default PlayItemList;
