import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { createStore} from 'redux';

function counterReducer(state = {value: 0}, action) {
  switch (action.type) {
    case 'counter/incremented':
      return {value: state.value + 1}
    case 'counter/decremented':
      return {value: state.value - 1}
    default:
      return state;
  }
}

let store = createStore(counterReducer)

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'counter/incremented'})
store.dispatch({ type: 'counter/incremented'})
store.dispatch({ type: 'counter/decremented'})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
