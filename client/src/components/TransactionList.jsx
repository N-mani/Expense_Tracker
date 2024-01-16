import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction'

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])
  console.log(transactions)
  return (
    <div className="mt-11 text-white">
      <h3 className="underline font-medium text-xl p-2 text-white ">History</h3>
      <ul className="font-medium p-2 w-full">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
