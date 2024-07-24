"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useUserHooks = (initialForm = {}) => {
	const [user, setUser] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const userLogin = useSelector((state) => state.user);

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
	//Allow to control access of the user
	const handleGetDataUser = () => {
		return userLogin.session;
	};

	return { user, setUser, handleChange, handleLogin, handleGetDataUser };
};
