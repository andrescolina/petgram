import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Article, Button, Img, ImgWrapper } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({
    id, likes = 0, src = DEFAULT_IMAGE
}) => {


    const [liked, setLiked] = useLocalStorage(id.toString(), false)

    const Icon = liked ? MdFavorite : MdFavoriteBorder;
    const [show, element] = useNearScreen();


    return (
        <Article ref={element}>
            {
                show && <Fragment>
                        <a href={`?detail=${id}`}>
                            <ImgWrapper>
                                <Img src={src} />                    
                            </ImgWrapper>
                        </a>
                        <Button onClick={() => setLiked(!liked)}>
                            <Icon size='32px' />{likes} likes!
                        </Button>
                </Fragment>
             }
        </Article>
    )
}