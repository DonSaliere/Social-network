import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friends';

const Navbar = (props) => {
  //let state = props.store.sideBar;
  let FriendsElements = props.friendNav.friends
    .map(f => <Friend name={f.name} />);
  return (

    <nav className={s.nav}>
      <div className={s.item}><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></div>
      <div className={`${s.item} ${s.active}`}><NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink></div>
      <div className={s.item}><a>News</a></div>
      <div className={s.item}><a>Music</a></div>
      <div className={s.item}><a>Settings</a></div>
      <div>
        <h2>Friends</h2>
        <div className={s.friends}>
          {FriendsElements}
        </div>
      </div>
    </nav>



  )
}

export default Navbar;