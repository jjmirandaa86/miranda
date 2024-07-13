"use client";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useModalsHooks } from "../../Hooks/useModalsHooks";

const Modals = ({
	title,
	msg,
	nameButton,
	functionButton,
	showModal,
	setShowModal,
}) => {
	const { windows, setWindows, handleShow, handleClose } =
		useModalsHooks(showModal);

	return (
		<>
			<Modal
				show={showModal.value}
				onHide={() => {
					setShowModal({ value: true, data: null });
					handleClose();
				}}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{msg}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="primary"
						onClick={() => {
							setShowModal({ value: false, data: {} });
							handleClose();
						}}
					>
						Cancel
					</Button>
					<Button variant="primary" onClick={functionButton}>
						{nameButton}
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Modals;
