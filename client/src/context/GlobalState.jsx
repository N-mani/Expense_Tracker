/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'
const intialState = {
  transactions: [],
  error: null,
  loading: true,
}

//step 1: Create Context
export const GlobalContext = createContext(intialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)

  //step 4:Actions

  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions')

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data,
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      })
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`)
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      })
    }
  }
  async function addTransaction(transaction) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const res = await axios.post('/api/v1/transactions', transaction, config)
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      })
    }
  }

  return (
    //stpe 2: Provider
    <GlobalContext.Provider
      //step 3: provide value
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
