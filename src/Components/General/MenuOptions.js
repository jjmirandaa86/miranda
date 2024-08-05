"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const MenuOptions = () => {
	const expand = false;
	return (
		<>
			<Nav className="justify-content-end flex-grow-1 pe-3">
				<Form className="d-flex">
					<Form.Control
						type="search"
						placeholder="Search"
						className="me-2"
						aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form>
				<Nav.Link href="/dashboard">Dashboard</Nav.Link>
				<NavDropdown
					title="Options"
					id={`offcanvasNavbarDropdown-expand-${expand}`}
				>
					<NavDropdown.Item href="/dashboard/sales">Sales</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="/dashboard/configuration">
						Something else here
					</NavDropdown.Item>
				</NavDropdown>
				<NavDropdown title="Master" id={`offcanvasNavbarDropdown-expand-${expand}`}>
					<NavDropdown.Item href="/dashboard/client">Client</NavDropdown.Item>
					<NavDropdown.Item href="/dashboard/color">Color</NavDropdown.Item>
				</NavDropdown>
			</Nav>
			<Nav.Link href="/dashboard/configuration">Configuration</Nav.Link>
			<Nav.Link href="/dashboard/close">Session Go out</Nav.Link>
		</>
	);
};

export default MenuOptions;
