import React from 'react';
import css from './Profile.module.css';
import PropTypes from 'prop-types';


export default function Profile({ username, tag, location, avatar, stats}) {
  return (
    <section>
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li className={css.stats_item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
          </li>
          <li className={css.stats_item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
          </li>
          <li className={css.stats_item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>      
    </section>    
  )
}

Profile.propTypes={
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
}