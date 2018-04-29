import moment from 'moment'
import filtersReducers from '../../reducers/filters'

test('should set default filter values', () => {
  const state = filtersReducers (undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  })
})

test('should set  sortBy to amount', () => {
  const state = filtersReducers (undefined, { type: 'SORT_BY_AMOUNT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  })
})

test('should set  sortBy to amount', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducers (currentState, { type: 'SORT_BY_DATE'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  })
})

test('should set text filter', () => {
  const text = 'abc'
  const state = filtersReducers (undefined, { type: 'SET_TEXT_FILTER', text})
  expect(state.text).toBe( text )
})

test('should set start date', () => {
  const startDate = undefined

  const state = filtersReducers (undefined, { type: 'SET_START_DATE', startDate})
  expect(state.startDate).toEqual( startDate )
})

test('should set start date', () => {
  const endDate = undefined

  const state = filtersReducers (undefined, { type: 'SET_END_DATE', endDate})
  expect(state.endDate).toEqual( endDate )
})
