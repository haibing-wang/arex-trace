import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {HashRouter} from "react-router-dom";
import 'antd/dist/reset.css';

const client = new ApolloClient({
  uri: window.location.href.includes('localhost')?'http://localhost:8080/graphql':'http://10.5.153.1:16800/graphql',
  cache: new InMemoryCache(),
  // credentials: 'include',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  </React.StrictMode>,
)
