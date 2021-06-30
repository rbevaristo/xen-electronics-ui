import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import ProfileMenu from './ProfileMenu'

const Header = () => {
  return (
        <React.Fragment>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="navbar-brand-box">
                            <Link to="/" className="logo logo-dark">
                                <strong>Xen Electronics</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Link to="/" className="logo logo-dark">
                            <i className="fa fa-shopping-cart"/>
                        </Link>
                        <ProfileMenu />
                    </div>
                </div>
            </header>
      </React.Fragment>
  )
}
const mapStatetoProps = state => {
  const { layoutType } = state.Layout
  return { layoutType }
}

export default connect(mapStatetoProps, null)(Header)
