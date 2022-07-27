import React from 'react';
import { NavLink } from 'react-router-dom';
import  s from './Nav.module.css';

const activeLink = ({isActive}) => isActive ? s.active:s.item;

const Nav = (props) => {
    return <nav className={s.nav}>
      <div className={s.item} >
        <div >
          <NavLink className = {activeLink} to='/profile'> Profile</NavLink>
        </div>
      <div>
          <NavLink className = {activeLink} to='/dialogs'>Messages</NavLink>
          </div>
          <div>
          <NavLink className = {activeLink} to='/users'>Users</NavLink>
          </div>
          <div  >
          <NavLink className = { activeLink} to='/news'> News</NavLink>
        </div>
        <div>
        <NavLink className = {activeLink} to='/music'> Music</NavLink>
        </div>
        <div>
        <NavLink className = {activeLink} to='/settings'> Settings</NavLink>
          </div>
          <div>
        <NavLink className = {activeLink} to='/login'> Login</NavLink>
          </div>
          </div>
          </nav>
  
}

      
      export default Nav;

  