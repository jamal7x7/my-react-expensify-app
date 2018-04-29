import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NoMatchPage from '../components/NoMatchPage'
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'




class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ExpenseDashboardPage}  />
            <Route path='/create' component={AddExpensePage} />
            <Route path='/edit' component={EditExpensePage} />
            <Route path='/help' component={HelpPage} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
