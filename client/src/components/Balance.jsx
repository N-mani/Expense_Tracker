import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { motion } from 'framer-motion'

const Balance = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((item) => item.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="text-black font-medium flex-col mx-auto w-2/3 p-3 text-[20px] text-center md:text-[32px]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        id="balance"
        className=" text-3xl md:text-6xl text-white"
      >
        ${total}
      </motion.h1>
    </div>
  )
}

export default Balance
