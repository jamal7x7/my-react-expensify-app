import { createStore, combineReducers} from 'redux'
import expencesReducer from '../reducers/expences'
import filtersReducer from '../reducers/filters'

//Store creation
export default () => {
  const store = createStore(
    combineReducers({
      expences: expencesReducer,
      filters: filtersReducer
    })
  )
  return store
}
