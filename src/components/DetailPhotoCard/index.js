import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../PhotoCard'

const QUERYID = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const DetailPhotoCard = ({ categoryId }) => {
    const { loading, error, data } = useQuery(
        QUERYID,
        {
            variables: {
                id: categoryId
            }
        }
    )
    console.log(data)

    if (loading) {
        return '...loading'
    }
    if (error) {
        return '...error'
    }

    return (
        <PhotoCard {...data.photo} />
    )
}