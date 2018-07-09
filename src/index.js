import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as actionCreators from './store/actions'
import App from './App';
import reducers from './store/reducers';
import registerServiceWorker from './registerServiceWorker';

// Redux DevTools Extension Configurations
const composeEnhancers = composeWithDevTools({
    actionCreators
});

// Redux Store
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
