import React from 'react'
import AppRoute from './approute.jsx'
import { Provider } from 'react-redux'
import { HashRouter} from 'react-router-dom'

const Index = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <AppRoute/>
      </HashRouter>
    </Provider>
);


export default Index

