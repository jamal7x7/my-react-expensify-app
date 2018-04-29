import selectExpences from '../../selectors/expences'
import expences from '../fixtures/expences'


test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const r = selectExpences(expences, filters)
  expect(r).toEqual([expences[2], expences[1]])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: 0,
    endDate: undefined
  }
  const r = selectExpences(expences, filters)
  expect(r).toEqual([expences[2], expences[0]])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: 200
  }
  const r = selectExpences(expences, filters)
  expect(r).toEqual([expences[0], expences[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const r = selectExpences(expences, filters)
  expect(r).toEqual([expences[2], expences[0], expences[1]])
})

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const r = selectExpences(expences, filters)
  expect(r).toEqual([expences[1], expences[2], expences[0]])
})
