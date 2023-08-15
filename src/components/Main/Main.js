import React from 'react';
import css from './Main.module.css';
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function Main() {
  return (
    <div className={css.layout}>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics 
            title="Upload stats" 
            stats={data} 
        />
        <FriendList 
            friends={friends}            
        />
        <TransactionHistory items={transactions}/>

    </div>
  )
}






