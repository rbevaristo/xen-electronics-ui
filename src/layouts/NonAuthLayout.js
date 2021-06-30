import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const capitalizeFirstLetter = string => {
  return string.charAt(1).toUpperCase() + string.slice(2)
}

const NonAuthLayout = props => {
  useEffect(() => {
    let currentPage = capitalizeFirstLetter(props.location.pathname)
    currentPage = currentPage.replaceAll('/', ' - ')
    document.title = currentPage + ' | XenElectronics'
  }, [])

  return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
  )
}

export default (withRouter(NonAuthLayout))
