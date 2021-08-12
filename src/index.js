import ApolloClient  from 'apollo-boost'
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import ReactDOM from 'react-dom'
import { App } from './App'


const client = new ApolloClient({
  uri: 'https://create-react-app-2i7p3kuce-andresteam.vercel.app/graphql'
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
