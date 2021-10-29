/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App; */

import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import GlobalProvider from "./Context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}
