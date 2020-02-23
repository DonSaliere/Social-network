import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img className={s.img} src='https://s1.best-wallpaper.net/wallpaper/m/1110/Beautiful-dream-beach_m.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>     
        ava
      </div>
      <div className={s.descriptionBlock}>{props.profile.contacts.vk}</div>
    </div>
  )
}

export default ProfileInfo;