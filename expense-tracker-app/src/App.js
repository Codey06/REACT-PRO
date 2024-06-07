import "./App.css"
import AddTransaction from "./Components/AddTransaction"
import Balance from "./Components/Balance"
import Header from "./Components/Header"
import InconeExpense from "./Components/InconeExpense"
import TransactionList from "./Components/TransactionList"
import { GlobalProvider } from "./Context/GlobalSate"

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <InconeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
