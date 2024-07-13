import React from "react";
import { Button } from "react-bootstrap";

const Task = () => {
	return (
		<>
			<h2>Task: </h2>
			<h5>Task 1</h5>
			<h5>Task 2</h5>
			<h5>Task 3</h5>
			<Button as="input" type="button" value="Go your task" />{" "}
		</>
	);
};

export default Task;
