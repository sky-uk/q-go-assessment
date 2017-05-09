import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/Header';
import ItemCreator from './components/ItemCreator';
import ItemsList from './components/ItemsList';
import './app.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <div className="app">
            <Header />
            <div>
              <ItemCreator />
              <ItemsList />
            </div>
          </div>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
