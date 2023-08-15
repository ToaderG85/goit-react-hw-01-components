import React from 'react'

import FriendListItem from 'components/FriendList/FriendListItem';

export default function FriendList({friends}) {
  return (
    <section>
      <ul className="friend-list">
        {friends.map((friend) =>{
          return (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              key={friend.id}
            />
          )        
        })}  
      </ul>
    </section>    
  )
}
