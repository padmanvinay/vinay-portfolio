import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./router/index.tsx";

import "./index.css";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);
