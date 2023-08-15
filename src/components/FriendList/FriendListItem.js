import React from 'react'
import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';


export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className={css.friendListItem}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.friendAvatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.friendName}>{name}</p>
    </li>
  )
}

FriendListItem.propTypes={
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,   
}