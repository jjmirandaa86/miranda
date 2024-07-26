"use client";
import React from "react";
import { useSelector } from "react-redux";
import { Form, Col, Row, Button, Container, Link } from "react-bootstrap";

const Login = () => {
	const { variant, size } = useSelector((state) => state.configuration.button);
	return (
		<Container>
			<Form>
				<Form.Group className="mb-3" controlId="formGroupEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formGroupPassword">
					<p>Forget Password</p>
				</Form.Group>
				<Button variant={variant} size={size} href="/dashboard">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
