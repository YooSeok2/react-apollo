import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './css/GlobalStyle';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle/>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


