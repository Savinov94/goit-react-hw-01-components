import css from './TransactionHistory.module.css'

const TransactionHistory = ({transactions}) => {
    return (
        <div className={css.transactionsContainer}>
            <table className={css.transactionHistory}>
                <thead className={css.headTable}>
                    <tr className="Head-table-list">
                        <th className="Head-table-item">Type</th>
                        <th className="Head-table-item">Amount</th>
                        <th className="Head-table-item">Currency</th>
                    </tr>
                </thead>

                <tbody className={css.bodyTable}>
                    {transactions.map((transactions)=>
                    (<tr key={transactions.id} className={css.bodyTableList}>
                        <td className="Body-table-item">{transactions.type}</td>
                        <td className="Body-table-item">{transactions.amount}</td>
                        <td className="Body-table-item">{transactions.currency}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>

    )

};

export default TransactionHistory