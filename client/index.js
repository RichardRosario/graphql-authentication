import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import LoginForm from './components/LoginForm';
import App from './components/App';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import requireAuth from './components/requireAuth';

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
        <Route path="login" component={LoginForm} />
        <Route path="signup" component={SignupForm} />
        <Route path="/" component={App} />
        <Route path="dashboard" component={requireAuth(Dashboard)} />
       
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
