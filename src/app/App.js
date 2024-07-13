"use client";

import React, { useState } from "react";
import Dashboard from "../app/dashboard/page"; //modificar esto
import Login from "../app/login/page";
import Toast from "../Components/General/Toast";
import Loading from "../Components/General/Loading";
import { Fascinate_Inline } from "next/font/google";

const App = () => {
	const [login, setLogin] = useState(true);

	return (
		<div>
			<Toast />
			<Loading />
			{login ? <Dashboard /> : <Login />}
		</div>
	);
};

export default App;
