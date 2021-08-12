import React from 'react';
import { PhotoCard } from '../PhotoCard';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = ({categoryId}) => {

    const { loading, error, data } = useQuery(getPhotos, {
        variables: {
            categoryId: categoryId
        }
    });

    if (loading) {
        return '...loading'
    }
    if (error) {
        return '...error'
    }
        
    return (
        <ul>
            {data.photos.map(photo => <PhotoCard key={photo.id} {...photo}/>) }
        </ul>
    )
}