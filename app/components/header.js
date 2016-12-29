import React from 'react'
import { Link } from 'react-router'
const Menu = require('react-burger-menu').bubble

const Header = () =>
  <Menu className='large-12 columns'>
    <div className='menu-links'><i className='fa fa-lock' /><Link to='/encode'>Encode</Link></div>
    <div className='menu-links'><i className='fa fa-unlock' /><Link to='/decode'>Decode</Link></div>
  </Menu>

export default Header
