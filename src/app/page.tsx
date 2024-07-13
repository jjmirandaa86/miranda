'use client'; 

import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./page.module.css";
import App from "./App"


import store from "../Redux/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <Provider store={store}>
        <App />
    </Provider>
  );
}