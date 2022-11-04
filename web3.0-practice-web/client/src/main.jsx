import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { TokenProvider } from "./context/TokenContext";
import "./index.css";

ReactDOM.render(
  <TransactionsProvider>
    <TokenProvider>
    <App />
    </TokenProvider>
  
  </TransactionsProvider>,
  document.getElementById("root"),
);