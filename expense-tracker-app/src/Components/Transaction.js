import React, { useContext } from "react"
import { GlobalContext } from "../Context/GlobalSate"

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  const sing = transaction.amount < 0 ? "-" : "+"
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sing} ${Math.abs(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
        >
          x
        </button>
      </li>
    </div>
  )
}

export default Transaction
