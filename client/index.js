import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

// import ApolloClient from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { ApolloProvider } from 'react-apollo';

import App from './components/App';

const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin'
  }
});


const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

// const client = new ApolloClient({
//   link: new HttpLink({ 
//     uri: '/graphql',
//     opts: { credentials: 'same-origin' }
//   }),
//   cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
// });

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
