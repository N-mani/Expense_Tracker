import { useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'

const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)
  }
  return (
    <div className="font-medium mt-11">
      <h3 className="text-xl underline ">Add new transaction</h3>
      <form action="" id="form" className="p-2 " onSubmit={onSubmit}>
        <div className="text-lg m-2">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter Text..."
            onChange={(e) => setText(e.target.value)}
            className=" p-2 mt-2 w-full border-2 border-gray-300 rounded-lg text-black"
          />
        </div>
        <div className="text-lg m-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            className="p-1 mt-2 w-full border-2 border-gray-300 rounded-lg text-black"
          />
        </div>
        <button
          className="m-2 p-2 text-lg  border-2 w-full bg-violet-400 rounded-lg"
          onClick={onsubmit}
        >
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransaction
