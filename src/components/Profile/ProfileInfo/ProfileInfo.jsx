import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.img} src='https://s1.best-wallpaper.net/wallpaper/m/1110/Beautiful-dream-beach_m.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava
      </div>
    </div>
  )
}

export default ProfileInfo;