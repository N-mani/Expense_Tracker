const express = require('express')
const router = express.Router()
const Transaction = require('../models/Transaction')

//@desc get all transactions
//@route GET /api/v1/transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    })
  } catch (err) {

  }
}

//@desc post a transaction
//@route POST /api/v1/transaction
const addTransaction = async (req, res) => {
  try {

    const { text, amount } = req.body

    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
      success: true,
      data: transaction
    })
  } catch (err) {
    res.status(400).json({
      message: err
    })
  }
}

//@desc delete a transaction
//@route DELETE /api/v1/transaction/:id
const deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id)

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      })
    }

    await transaction.deleteOne()

    return res.status(200).json({
      success: true,
      data: {}
    })
  }
  catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message || "Server Error!"
    })
  }
}

module.exports = { getTransactions, addTransaction, deleteTransaction }