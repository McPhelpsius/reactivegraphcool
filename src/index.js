import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-client-preset';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const wsLink = new WebSocketLink({
  uri: 'wss://subscriptions.us-west-2.graph.cool/v1/cjci9sl0w0kpx0159x5bwgzzg',
  options: {
    reconnect: true
  }
});

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjci9sl0w0kpx0159x5bwgzzg'
});

const link = split(
  ({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return kind === 'Operation Definition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client 

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
