import React from 'react';
import { Link } from 'react-router-dom';

const AlbumItem = ({ item }) => {
    const { cover, title, description } = item;

    return (
        <Link to="/playlist">
            <div className='album-item'>
                <div className='album-item-cover'><img src={cover} alt="" /></div>
                <div className='album-item-title'>{title}</div>
                <div className='album-item-description'>{description}</div>
            </div>        
        </Link>
    );
}

export default AlbumItem;
