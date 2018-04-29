import { addExpence, editExpence, removeExpence } from '../../actions/expences'


test('should setup remove expence action object', () => {
  const action = removeExpence({id:'abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENCE',
    id: 'abc'
  })
})

test('should setup edit expence action object', () => {
  const action = editExpence('abc',{note: 'hello'})
  expect(action).toEqual({
    type: 'EDIT_EXPENCE',
    id: 'abc',
    updates: {
      note: 'hello'
    }
  })
})

test('should setup add expence action object', () => {
  const expenceData = {
    discription: 'Rent',
    note: 'Last month rent',
    amount: 1750,
    createdAt: 1200
  }
  const action = addExpence(expenceData)
  expect(action).toEqual({
    type: 'ADD_EXPENCE',
    expence: {
    ...expenceData,
    id: expect.any(String)
    }
  })
})

test('should setup add expence action object', () => {
  const action = addExpence()
  expect(action).toEqual({
    type: 'ADD_EXPENCE',
    expence: {
      id: expect.any(String),
      discription: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
