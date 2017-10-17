import './assets/scss/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import store from './store'

ReactDOM.render(
<Index store={store}/>,
    document.getElementById('app')
);
