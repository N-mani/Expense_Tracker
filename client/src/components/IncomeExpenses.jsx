import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((t) => t.amount)

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  return (
    <div className="flex border-2 w-full justify-around p-5 ">
      <div className="Income ">
        <h2 className="font-medium">INCOME</h2>
        <p className="text-green-500 font-medium">${income}</p>
      </div>
      <div className="Expense">
        <h2 className="font-medium">EXPENSE</h2>
        <p className="text-red-500 font-medium">${expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
