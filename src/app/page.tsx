'use client'; 

import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./page.module.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Components/User/Login"

import store from "../Redux/store";
import { Provider } from "react-redux";


export default function Home() {
  return (
    <Login>
    
    </Login>
  );
}