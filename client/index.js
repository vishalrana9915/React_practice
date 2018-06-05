import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import Routes from './routes';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import createLogger from 'redux-logger';
// import {createStore, applyMiddleware} from 'redux'; 

// var logger = createLogger();

// const store = createStore({
// 	applyMiddleware(thunk,promise,logger)
// });



// ReactDOM.render(

// 	<Provider store = {store}>
// 		<Routes />

// 	</Provider>

// 	);

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);