import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// creating context to pass value
const context = React.createContext();
export const CtxConsumer = context.Consumer;


const routing = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <context.Provider>
      <Switch>
        <Route exact path="/" component={App}></Route>
      </Switch>
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
