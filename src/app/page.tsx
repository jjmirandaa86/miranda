'use client'; 

import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./page.module.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import store from "../Redux/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <>login</>
  );
}

/*
<Router> 
<Routes>
<Route path="/" element={<App /> }>
  <Route index element={<App /> } />
  <Route path="/about" element={<App /> } />
  <Route path="/contact" element={<App /> } />
</Route>
</Routes>
</Router>
*/