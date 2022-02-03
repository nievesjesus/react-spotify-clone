import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumItemslist = ({ items }) => {
    return (
        <>
            {items.map(item => { return(<AlbumItem item={item}/>) })}
        </>
    );
}

export default AlbumItemslist;
