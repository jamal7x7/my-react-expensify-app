import moment from 'moment'
import expencesReducers from '../../reducers/expences'
import expences from '../fixtures/expences'


test(' should set defalt state', () => {
  const state = expencesReducers(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})

test(' should add expense', () => {
  const e = {
    id: 3,
    discription: 'Car',
    note: '',
    amount: 222000,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENCE',
    expence: e
  }
  const state = expencesReducers(expences, action)
  expect(state).toEqual([
    ...expences,
    e
  ])
})

test('should remove expence by id', () => {
  const action = {
    type: 'REMOVE_EXPENCE',
    id: expences[1].id
  }
  const state = expencesReducers( expences, action )
  expect(state).toEqual([expences[0], expences[2]])
})

test('should not remove expence if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENCE',
    id: -1
  }
  const state = expencesReducers( expences, action )
  expect(state).toEqual(expences)
})

test('should edit an expence', () => {

  const e = {
    id: 1,
    discription: 'Tea',
    note: '',
    amount: 300,
    createdAt: 100
  }

  const action = {
    type: 'EDIT_EXPENCE',
    id: 1,
    updates: e
  }

  const state = expencesReducers( expences, action )
  expect(state).toEqual([e, expences[1], expences[2]])
})

test('should not edit an expence if id not found', () => {

  const e = {
    id: 1,
    discription: 'Water',
    note: '',
    amount: 0,
    createdAt: 0
  }

  const action = {
    type: 'EDIT_EXPENCE',
    id: -1,
    updates: e
  }

  const state = expencesReducers( expences, action )
  expect(state).toEqual(expences)
})
