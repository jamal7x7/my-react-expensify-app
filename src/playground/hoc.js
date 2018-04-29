import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const requireAuthentication = (WraperComponent) => {

    return (props) => (
      <div>
        {props.isAuthenticated ? (
          <WraperComponent {...props}/>
        ) : (
              <p>Login or register!</p>
            )
        }
      </div>
    )
}

const AuthInfo = requireAuthentication(Info)


ReactDOM.render(<AuthInfo info='here is the info' isAuthenticated={true} />, document.getElementById('app'))
