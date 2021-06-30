import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from 'store/actions'

const Logout = props => {
  useEffect(() => {
    props.logoutUser(props.history)
  }, [])

  return (
        <React.Fragment>
            <h1>&nbsp;</h1>
        </React.Fragment>
  )
}

export default withRouter(connect(null, { logoutUser })(Logout))
