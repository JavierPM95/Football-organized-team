import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Players from './components/Players';
import SelectPlayers from './components/SelectPlayers'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const App = () => (
<Provider store={store}>
    <main className="container">
      <h1> Football App </h1>
      <Players />
      <SelectPlayers/>
    </main>
</Provider>
)

export default App;