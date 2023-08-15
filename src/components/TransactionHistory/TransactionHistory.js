import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <section>
      <table className={css.transaction_history}>
        <thead>
          <tr className='table-head'>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item=>{
            return (
              <tr className='table-row' key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>  
            )
          }))}             
        </tbody>
      </table>
    </section>    
  )
}

TransactionHistory.propTypes={
  items: PropTypes.array.isRequired,   
}