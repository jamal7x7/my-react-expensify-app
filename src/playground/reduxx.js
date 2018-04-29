import { createStore } from 'redux'

const defaultState = { count :0}

const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + 1}
    case 'DECREMENT': return { count: state.count - 10}
    default: return state
  }
}



const store = createStore ( countReducer )




const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})




store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'DECREMENT'
})
console.log(store.getState())
