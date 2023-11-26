import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={transactionClass}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
        x
      </button>
    </li>
  );
};

export default Transaction;
