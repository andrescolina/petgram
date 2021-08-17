import React, { Fragment } from 'react';
import { Article, Img, ImgWrapper } from './styles';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButtton';
import { useMutation } from '@apollo/react-hooks';
import { LIKE_PHOTO } from './mutations';
import { Link } from '@reach/router';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'


export const PhotoCard = ({
    id, likes = 0, src = DEFAULT_IMAGE
}) => {

    const [addLike, {data, loading, error}] = useMutation(LIKE_PHOTO)

    const [liked, setLiked] = useLocalStorage(id.toString(), false)

    const [show, element] = useNearScreen();

    return (
        <Article ref={element}>
            {
                show && <Fragment>
                        <Link to={`/detail/${id}`}>
                            <ImgWrapper>
                                <Img src={src} />                    
                            </ImgWrapper>
                        </Link>
                        <FavButton 
                            liked={ liked } 
                            likes={ likes } 
                            onClick={ (e) => {
                                setLiked(!liked);
                                addLike({
                                    variables: {
                                        input: { id }
                                    }
                                })
                            } } 
                        />
                </Fragment>
             }
        </Article>
    )
}