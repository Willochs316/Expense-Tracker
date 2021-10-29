import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
const initialState = {
  transactions: [],
};

//Create Context
export const GlobalContext = createContext(initialState);

// Provider component
const GlobalProvider = ({ children }) => {
  //Use dispatch to call our reducer action
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  //payload, any data we want to send to it that is the id
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  //pass in the deletetransaction to Global Provider
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
