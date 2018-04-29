import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

//import 'normalize.css/normalize.css'
import './styles/styles.sass'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpence} from './actions/expences'
import {setTextFilter} from './actions/filters'
import getVisibleExpences from './selectors/expences'


const store = configureStore()

// store.dispatch(addExpence({ discription: 'Water bill', amount: 70, createdAt: 1000}))
// store.dispatch(addExpence({ discription: 'Gas bill', amount: 110, createdAt: 4100}))
// store.dispatch(addExpence({ discription: 'Rent', amount: 11000, createdAt: 1300}))
// store.dispatch(setTextFilter('water'))
//
// setTimeout( () => {
//   store.dispatch(setTextFilter('bill'))
// }, 3000)

// const state = store.getState()
// const visibleExpences = getVisibleExpences(state.expences, state.filters)
// console.log(visibleExpences)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
