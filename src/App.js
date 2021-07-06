import StoreFront from './components/storefront/store-front';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import SimpleCart from './components/cart/simplecart';
import Checkout from './components/cart/checkout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div style={{ minHeight: 'calc(100vh - 175px)'}}>
                <div style={{ width: '15%', float: 'right' }}>
                  <SimpleCart />
                </div>
                <StoreFront />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/cart"
          render={() => {
            return (
              <div style={{ minHeight: 'calc(100vh - 175px)'}}>
                <div style={{ width: '60%', margin: 'auto' }}>
                  <Checkout />
                </div>
              </div>
            );
          }}
        />
        <Route
          path="*"
          render={() => {
            return <div>404</div>;
          }}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
