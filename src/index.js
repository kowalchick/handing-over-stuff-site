import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'whatwg-fetch';

import {store} from "./redux/store";
import './settings/main.scss';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);