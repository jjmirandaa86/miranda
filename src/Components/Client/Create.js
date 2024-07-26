"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Image, Row } from "react-bootstrap";
import { useClientHooks } from "../../Hooks/useClientHooks";

const Create = () => {
	const initialForm = {
		Id: null,
		Identification: "",
		Name: "",
		Address: "",
		Phone: "",
		Email: "",
		State: "A",
	};

	const { client, handleChange, handleSave, sideWindows, handleSideWindows } =
		useClientHooks({ initialForm });

	const { variant, size } = useSelector((state) => state.configuration.button);

	return (
		<>
			{!sideWindows ? (
				<>
					<Button variant={variant} size={size} onClick={handleSideWindows}>
						<Image
							src="../../assets/icons/add.svg"
							width="30"
							height="30"
							alt="Add"
						/>
					</Button>
				</>
			) : (
				<div>
					<Form>
						<Row>
							<Form.Group className="mb-1" controlId="form.identification">
								<Form.Label>Identification</Form.Label>
								<Form.Control
									type="text"
									placeholder="0923308654"
									name="identification"
									value={client.identification}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-1" controlId="form.name">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Jefferson Miranda"
									name="name"
									value={client.name}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-1" controlId="form.address">
								<Form.Label>Address</Form.Label>
								<Form.Control
									type="text"
									placeholder="Jefferson Streets"
									name="address"
									value={client.address}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-1" controlId="form.phone">
								<Form.Label>Phone</Form.Label>
								<Form.Control
									type="text"
									placeholder="0993277375"
									name="phone"
									value={client.phone}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-1" controlId="form.email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="jefferson_miranda@hotmail.es"
									name="email"
									value={client.email}
									onChange={handleChange}
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-1" controlId="form.state">
								<Form.Label>Status</Form.Label>
								<Form.Select
									defaultValue={client.state}
									onChange={handleChange}
									name="state"
								>
									<option value="A">Active</option>
									<option value="I">Inactive</option>
								</Form.Select>
							</Form.Group>
						</Row>
						<Form.Group className="mb-1 float-end" controlId="form.state">
							<Button variant={variant} size={size} onClick={handleSideWindows}>
								<Image
									src="../../assets/icons/cancel.svg"
									width="30"
									height="30"
									alt="Add"
								/>
							</Button>
							<Button variant={variant} size={size} onClick={handleSave}>
								<Image
									src="../../assets/icons/save.svg"
									width="30"
									height="30"
									alt="Add"
								/>
							</Button>
						</Form.Group>
					</Form>
				</div>
			)}
		</>
	);
};

export default Create;
