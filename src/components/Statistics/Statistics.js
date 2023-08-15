import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({stats}) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>UPLOAD STATS</h2>
      <ul className={css.stat_list}>
      {stats.map((stat)=>{
        return (          
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>        
        )
      })}    
      </ul>  
    </section>
  )
}

Statistics.propTypes={
  stats: PropTypes.array.isRequired,  
}
