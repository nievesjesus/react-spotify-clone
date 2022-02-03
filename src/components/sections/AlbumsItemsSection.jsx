import React from 'react';
import AlbumItemslist from '../elements/AlbumItemsList';

const AlbumsItemsSections = ({ items, title, description }) => {
    return (
            <div className='album-items-section'>
                <h4 className='album-items-section-title'>{title}</h4>
                <p className='album-items-section-description'>{description}</p>
                <div className='album-items-section-all'>
                    <AlbumItemslist items={items} />
                </div>
            </div>
    );
}

export default AlbumsItemsSections;
