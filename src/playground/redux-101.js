import { createStore } from 'redux'

const incrmentCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
  }
)

const resetCount = ({reset = 0} = {}) => ({
    type: 'RESET',
    reset
  }
)


const decrmentCount = ({decrementBy = 10} = {}) => ({
    type: 'DECREMENT',
    decrementBy
  }
)

const setCount = ({setBy}) => ({
    type: 'SET',
    setBy
  }
)

const countReducer = ((state = {count: 0}, action) => {
  //console.log('running')
  switch (action.type) {

    case 'INCREMENT': return {count: state.count + action.incrementBy}

    case 'DECREMENT': return {count: state.count - action.decrementBy}

    case 'RESET': return {count: action.reset}

    case 'SET': return {count: action.setBy}

    default: return state
  }
})

const store = createStore(countReducer )
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })
//
// //unsubscribe()
//
// store.dispatch({
//   type: 'INCREMENT'
// })
//
// store.dispatch({
//   type: 'RESET'
// })
//
// store.dispatch({
//   type: 'DECREMENT',
//     decrementBy: 10
// })

store.dispatch(
  incrmentCount()
)

store.dispatch(
  decrmentCount()
)

store.dispatch(
  resetCount()
)

store.dispatch(
  setCount({setBy: 111})
)

//console.log(store.getState())
