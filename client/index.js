import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import LoginForm from './components/LoginForm';
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
        <Route path="login" component={LoginForm} />
       
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
