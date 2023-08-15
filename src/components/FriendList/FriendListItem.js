import React from 'react'
import PropTypes from 'prop-types';


export default function FriendListItem({avatar, name, isOnline}) {
  return (
    <li className="friendListItem">
        <span className={isOnline ? "online" : "offline"}></span>
        <img className="friendAvatar" src={avatar} alt="User avatar" width="48" />
        <p className="friendName">{name}</p>
    </li>
  )
}

FriendListItem.propTypes={
  tisOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,   
}