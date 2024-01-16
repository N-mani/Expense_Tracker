/* eslint-disable react/prop-types */
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <div className="flex ">
      <button
        className="text-white m-2  p-1 hover:bg-red-500 hover:text-black duration-300"
        onClick={() => deleteTransaction(transaction._id)}
      >
        x
      </button>
      <li
        key={transaction.id}
        className={`p-1 m-2 flex justify-between border-r-[5px] ${
          // eslint-disable-next-line react/prop-types
          transaction.amount < 0 ? `border-red-500` : `border-green-500`
        } shadow-lg w-full`}
      >
        {transaction.text}{' '}
        <span className="">
          {sign}${Math.abs(transaction.amount)}
        </span>
      </li>
    </div>
  )
}

export default Transaction
