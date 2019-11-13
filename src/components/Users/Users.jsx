import React from 'react';
import style from './Users.module.css';

let Users = (props) => {

    if (props.users.lenght === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg', followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } },
            { id: 2, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg', followed: true, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } },
            { id: 3, photoUrl: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg', followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Kaluga', country: 'Russia' } }
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={style.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>

}

export default Users;

