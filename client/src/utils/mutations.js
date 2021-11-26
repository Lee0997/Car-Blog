import { gql } from '@apollo/client';

export const LOGIN = gql `
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}

`;

export const CREATE_USER = gql `
mutation createUser($username: String!, $email: String!, $password: String!){
    createUser(username: $username, email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}

`
export const SAVE_REVIEW = gql`
mutation saveReview($reviewData: ReviewInput!) {
    saveReview(reviewData: $reviewData)
} 
`;

export const REMOVE_REVIEW = gql`

`;
