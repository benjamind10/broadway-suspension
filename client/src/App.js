import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/navigation/navigation.component';
import OrderHistory from './pages/OrderHistory';
import Bmw from './pages/Bmw';
import CamberPlatesTopMounts from './pages/CamberPlatesTopMounts';
import Vw from './pages/Vw';
import Footer from './components/footer/footer.component';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='main-body'>
          <StoreProvider>
            <Navigation />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/bmw/:id' component={Bmw} />
              <Route exact path='/volkswagen/:id' component={Vw} />
              <Route
                exact
                path='/camber-plates/:id'
                component={CamberPlatesTopMounts}
              />
              <Route
                exact
                path='/orderHistory'
                component={OrderHistory}
              />
              <Route exact path='/products/:id' component={Detail} />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
