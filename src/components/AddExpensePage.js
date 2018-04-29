import React from 'react'
import { connect } from 'react-redux'
import { addExpence } from '../actions/expences'
import ExpenceList from './ExpenceList'

const AddExpensePage = (props) => (
  <div>
    Hello from add expense component!<br/><br/><br/>

    <form action="" value="" onSubmit= { e => {
      e.preventDefault()
      e.target.elements.discription.value && props.dispatch(addExpence({
        discription: e.target.elements.discription.value,
        amount: e.target.elements.amount.value || 'not specified',
        createdAt: e.target.elements.createdAt.value || 'not specified'
      }))
      e.target.elements.discription.value=''
      e.target.elements.amount.value=''
      e.target.elements.createdAt.value=''
    }} >
      Discription : <input autoFocus type="text" name="discription" value={props.expences.discription} /> <br/><br/>
      Amount ($): <input type="number" name="amount" value={props.expences.amount }/> <br/><br/>
      Created at : <input type="text" name="createdAt" value={props.expences.createdAt} /> <br/><br/><br/>
      <button> ADD</button>
      <br/><br/><br/>
      <ExpenceList />
    </form>

  </div>
)

const mapStateToProps = state => (
  {
    expences: state.expences
  }
)

export default connect (mapStateToProps) (AddExpensePage)
