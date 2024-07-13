"use client";
import { useState } from "react";

export const useModalsHooks = ({ showModal }) => {
	const [windows, setWindows] = useState(showModal);

	const handleShow = () => setWindows(true);

	const handleClose = () => setWindows(false);

	return {
		windows,
		setWindows,
		handleShow,
		handleClose,
	};
};
