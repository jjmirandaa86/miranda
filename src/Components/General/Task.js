import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const Task = () => {
	const { variant, size } = useSelector((state) => state.configuration.button);
	return (
		<>
			<h2>Task: </h2>
			<h5>Task 1</h5>
			<h5>Task 2</h5>
			<h5>Task 3</h5>
			<Button
				as="input"
				type="button"
				value="Go your task"
				variant={variant}
				size={size}
			/>{" "}
		</>
	);
};

export default Task;
