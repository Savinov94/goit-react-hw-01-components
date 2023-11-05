import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className={css.transactionsContainer}>
      <table className={css.transactionHistory}>
        <thead className={css.headTable}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.bodyTable}>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.bodyTableList}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
