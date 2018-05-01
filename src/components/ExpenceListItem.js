import React from 'react'
import { connect } from 'react-redux'
import { removeExpence } from '../actions/expences'
import configureStore from '../store/configureStore'
import moment from 'moment'
import numeral from 'numeral'


export const ExpenceDiscription = ({ dispatch, id, discription, amount, createdAt }) => (
  <div>

    <h3 > { discription } </h3>
    <p> {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('DD MMMM YYYY')} </p>
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
