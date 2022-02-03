import React from 'react';
import AlbumsItemsSections from '../sections/AlbumsItemsSection';

const AlbumsList = ({ albums }) => {
    return (
        <>
        {albums.map(album => {
            return <AlbumsItemsSections title={album.title} description={album.description} items={album.items} />            
        })}   
        </>
    );  
}

export default AlbumsList;
