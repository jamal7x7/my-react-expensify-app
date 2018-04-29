import React from 'react'
import { connect } from 'react-redux'
import ExpenceListItem from './ExpenceListItem'
import selectExpence from '../selectors/expences'


export const ExpenceList = (props) => (
  <div>
    <h1>Expence List</h1>
    {
      props.expences.length !== 0 ? (
        props.expences.map( expence => {
          return <ExpenceListItem key={expence.id} {...expence} />
        })
      ) : (
        <p>No expences</p>
      )
    }
  </div>
)

const mapStateToProps = state => {
  return {
    expences: selectExpence(state.expences, state.filters)
  }
}

export default connect( mapStateToProps )(ExpenceList)
