"use client";

import React, { useState } from "react";
import Dashboard from "./dashboard/page"; //modificar esto
import Login from "../app/login/page";
import Toast from "../Components/General/Toast";

import store from "../Redux/store";
import { Provider } from "react-redux";

const App = () => {
	const [login, setLogin] = useState(true);

	return (
		<Provider store={store}>
			<App />
			Page
		</Provider>
	);
};

export default App;

//<Toast />
//{login ? <Dashboard /> : <Login />}
