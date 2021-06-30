import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import avatar2 from '../../assets/images/users/avatar-2.jpg'

const ProfileMenu = ({ username = 'Guest' }) => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  return (
        <React.Fragment>
            <Dropdown isOpen={open} toggle={toggleMenu} className="d-inline-block user-dropdown">
                <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
                    <img className="rounded-circle header-profile-user mr-1" src={avatar2} alt="Header Avatar"/>
                    <span className="d-none d-xl-inline-block ml-1 text-transform">{username}</span>
                    <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem className="text-danger" href="/logout"><i className="ri-shut-down-line align-middle mr-1 text-danger"/>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
  )
}

export default ProfileMenu
