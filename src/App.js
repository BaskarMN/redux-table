import React from 'react';
import './css/App.css';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App-header">
      <h3>Redux Data Fetch and Display</h3>
      <Content />
    </div>
    </Provider>
  );
}

export default App;