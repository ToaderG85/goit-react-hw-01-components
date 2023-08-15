import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({stats}) {
  return (
    <section className="statistics">
      <h2 className="title">UPLOAD STATS</h2>
      <ul className="stat-list">
      {stats.map((stat)=>{
        return (          
            <li className="item" key={stat.id}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>        
        )
      })}    
      </ul>  
    </section>
  )
}

Statistics.propTypes={
  percentage: PropTypes.number.isRequired,  
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,  
}
