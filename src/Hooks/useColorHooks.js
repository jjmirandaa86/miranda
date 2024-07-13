"use client";
import { useState } from "react";

export const useColorHooks = (initialForm) => {
	const [color, setColor] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setColor({
			...color,
			[name]: value,
		});
	};

	const handleSave = () => {
		alert("save");
	};

	const handleModify = () => {
		alert("modify");
	};
	const handleDelete = () => {
		alert("delete");
	};

	return {
		color,
		setColor,
		handleChange,
		handleSave,
		handleModify,
		handleDelete,
	};
};
