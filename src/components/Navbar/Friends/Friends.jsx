import React from 'react';
import s from './Friends.module.css';

const Friend = (props) => {
  return (
    <div className={s.item}>
      <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' />
      <div>
      {props.name}
      </div>
    </div>
  )
}

export default Friend;