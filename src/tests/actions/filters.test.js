import moment from 'moment'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'

test('should set text filter', () => {
  const t = setTextFilter()
  expect(t).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
test('should set text filter', () => {
  const t = setTextFilter( 'abc')
  expect(t).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'abc'
  })
})
test('should set amount filter', () => {
  const a = sortByAmount()
  expect(a).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})
test('should set date filter', () => {
  const d = sortByDate()
  expect(d).toEqual({
    type: 'SORT_BY_DATE'
  })
})
test('should set start date filter', () => {
  const d = setStartDate(moment(0))
  expect(d).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
})
test('should set start date filter', () => {
  const d = setEndDate(moment(0))
  expect(d).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
})
