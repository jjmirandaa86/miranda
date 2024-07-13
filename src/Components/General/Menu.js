"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Image } from "react-bootstrap";
import MenuOptions from "./MenuOptions";

const Menu = () => {
	//expand = false, 'sm', 'md', 'lg', 'xl', 'xxl'
	const expand = false;
	return (
		<>
			<Navbar key={expand} expand={expand} className="bg-body-tertiary">
				<Container fluid>
					<Navbar.Brand href="#home">
						<Image
							src="./assets/icons/handClick.svg"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
						System
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Menu
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<MenuOptions />
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default Menu;
