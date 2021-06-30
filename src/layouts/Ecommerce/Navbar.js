import React from 'react'
import { Collapse, Container } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <React.Fragment>
        <div className="topnav">
            <Container fluid>
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">

                    <Collapse isOpen={true} className="navbar-collapse" id="topnav-menu-content">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    <i className="ri-dashboard-line mr-2"></i> Home
                                </Link>
                            </li>

                            </ul>
                    </Collapse>
                </nav>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default withRouter(connect()(Navbar))
