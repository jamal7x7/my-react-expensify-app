import { createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//Expences reducer
const expencesReducerDefaultState = []
const expencesReducer = (state = expencesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENCE':
      return [
        ...state,
        action.expence
      ]
    case 'REMOVE_EXPENCE':
      return state.filter(({ id }) => id !== action.id )

    case 'EDIT_EXPENCE':
      return state.map( (expence) => {
        if (expence.id === action.id) {
          return {
            ...expence,
            ...action.updates
          }
        } else {
          return expence
        }
      })
    default:
      return state

  }
}


// ADD_EXPENCE
const addExpence = (
  {
    discription = '',
    note = '',
    amount = 0,
    createdAt = 0
  }={}
) => ({
  type: 'ADD_EXPENCE',
  expence: {
    id: uuid(),
    discription,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENCE
const removeExpence = (
  {
     id
  } = {}
) => ({
  type: 'REMOVE_EXPENCE',
  id
})

// EDIT_EXPENCE
const editExpence = (id ,updates) => ({
  type: 'EDIT_EXPENCE',
  id,
  updates
})

//filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text}
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount'}
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date'}
    case 'SET_START_DATE':
      return { ...state, startDate: action.date}
    case 'SET_END_DATE':
      return { ...state, endDate: action.date}
    default:
      return state

  }
}

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SET_START_DATE
const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})

// SET_END_DATE
const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})

// Get visible expences
const getVisibleExpences = (expences, {text, sortBy, startDate, endDate}) => {
  return expences.filter( (expence) => {
    const startDateMatch = typeof startDate !== 'number' || expence.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expence.createdAt <= endDate
    const textMatch = typeof text!=='string' || expence.discription.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort( (a, b) => {
    if (sortBy === 'date') {
      return a.createdAt <= b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount <= b.amount ? 1 : -1
    }
  })

}

//Store creation
const store = createStore(
  combineReducers({
    expences: expencesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpences = getVisibleExpences(state.expences, state.filters)
  //console.log(state)
  console.log(visibleExpences)
})


const expenceOne = store.dispatch(addExpence({ discription: 'rent', amount: 1000, createdAt: 1000}))
const expenceTwo = store.dispatch(addExpence({ discription: 'coffee', amount: 300, createdAt: -1000}))
//
// store.dispatch(removeExpence({ id: expenceOne.expence.id }))
// store.dispatch(editExpence(expenceTwo.expence.id, { amount: 500 }))
//
// store.dispatch(setTextFilter('Coffee'))
// store.dispatch(setTextFilter())
//
store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))




const demoState = {
  expenses: [{
    id:'sfsnfknsdnfkdqnsd',
    discription:'April rent',
    note: 'leaks in the bathrom',
    amount: 1200,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}
