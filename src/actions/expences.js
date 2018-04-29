import uuid from 'uuid'

// ADD_EXPENCE
export const addExpence = (
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
export const removeExpence = (
  {
     id
  } = {}
) => ({
  type: 'REMOVE_EXPENCE',
  id
})

// EDIT_EXPENCE
export const editExpence = (id ,updates) => ({
  type: 'EDIT_EXPENCE',
  id,
  updates
})
