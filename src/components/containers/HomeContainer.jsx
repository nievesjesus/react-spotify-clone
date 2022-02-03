import React, { useState} from 'react';
import { useEffect } from 'react';
import { getAllAlbums } from '../../services/Albums';
import AlbumsList from '../elements/AlbumsList';

const HomeContainer = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAllAlbums().then(albums => {
            setAlbums(albums)
        })
    }, []);
    return (
        <div className='home-container'>
                <h1>Welcome, Jesus</h1>
                <AlbumsList albums={albums} />
        </div>
    );
}

export default HomeContainer;
