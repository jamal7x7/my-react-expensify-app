import React from 'react'
import { connect } from 'react-redux'
import { removeExpence } from '../actions/expences'
import configureStore from '../store/configureStore'


export const ExpenceDiscription = ({ dispatch, id, discription, amount, createdAt }) => (
  <div>

    <h3 > { discription } </h3>
    <p> {amount} - {createdAt} </p>
    <button
      onClick={e => {
        dispatch(removeExpence({id}))
      }}
      >Remove
    </button>
  </div>
)

const mapStateToProps = state => {
  return {
    expences: state.expences
  }
}

export default connect( mapStateToProps )(ExpenceDiscription)
