// In the parent component or wherever you are using the Transaction component
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

