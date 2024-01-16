import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'

import Header from './components/Header'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col w-full bg-[#030303] min-h-screen text-white items-center  mx-auto    p-3 ">
        <Header />
        <div className=" w-full md:max-w-2xl flex flex-col justify-between  md:flex p-[20px]">
          <div>
            <Balance />
            <IncomeExpenses />
          </div>
          <div>
            <AddTransaction />
          </div>
        </div>
        <TransactionList />
      </div>
    </GlobalProvider>
  )
}

export default App
