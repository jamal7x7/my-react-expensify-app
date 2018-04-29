import React from 'react'
import {Link} from 'react-router-dom'

export const NoMatchPage = () => (
  <div>
    <h1>404!!!</h1>
    <h3>Page not found!</h3>
    <Link to="/">Go Home</Link>

  </div>
)

export default NoMatchPage
