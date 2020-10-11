import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from 'react-router-dom';

// creating context to pass value
const context = React.createContext();
export const CtxConsumer = context.Consumer;


const routing = (
  <BrowserRouter>
    <context.Provider>
      <div>
        <Route exact path="/" component={App}></Route>
      </div>
    </context.Provider>
  </BrowserRouter>
)

ReactDOM.render(
  routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
