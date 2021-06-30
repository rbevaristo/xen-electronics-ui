import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import {
  changeLayout,
  changeTopbarTheme,
  toggleRightSidebar,
  changeLayoutWidth
} from 'store/actions'

import Header from './Header'

const EcommerceLayout = ({ children, topbarTheme }) => {
  return (
      <React.Fragment>
        <div id="layout-wrapper">
          <Header
              theme={topbarTheme}
          />
          <div className="main-content">
            {children}
          </div>
        </div>
      </React.Fragment>
  )
}

const mapStatetoProps = state => {
  return {
    ...state.Layout
  }
}

export default connect(mapStatetoProps, {
  changeTopbarTheme, toggleRightSidebar, changeLayout, changeLayoutWidth
})(withRouter(EcommerceLayout))
