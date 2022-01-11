import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "antd/dist/antd.min.css";

ReactDOM.render(
  <BrowserRouter>
    <ToastProvider autoDismissTimeout={3000}>
      <App />
    </ToastProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
