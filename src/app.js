import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './styles/styles.sass'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpence} from './actions/expences'
import {setTextFilter} from './actions/filters'
import getVisibleExpences from './selectors/expences'

const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
