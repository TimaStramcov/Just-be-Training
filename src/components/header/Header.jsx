import React from 'react'
import './Header.scss'
import logo from '../../img/just-be-training.svg'
import { NavLink } from 'react-router-dom'
import { MAIN_ROUTE } from '../../routing/path.js'
 
function Header() {

  return (
    <header className='header'>
        <div className="header__logo">
          <NavLink to={ MAIN_ROUTE }> <img src={ logo } alt="Just be Training" /></NavLink>
        </div>
    </header>
  )
}

export default Header