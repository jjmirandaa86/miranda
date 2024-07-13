"use client";
import { useState } from "react";

export const useUserHooks = (initialForm) => {
	const [user, setUser] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const handleLogin = () => {
		alert("Login");
	};

	const handleNew = () => {};
	const handleModify = () => {};
	const handleDelete = () => {};
	const handleRecoverPassword = () => {};

	return { user, setUser, handleChange, handleLogin };
};
