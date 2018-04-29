import React from 'react'
import ExpenceList from './ExpenceList'
import ExpenceListFilters from './ExpenceListFilters'

export const ExpenseDashboardPage = () => (
  <div>
    <ExpenceListFilters />
    <ExpenceList />
  </div>
)

export default ExpenseDashboardPage
