"use client";

import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button, Image } from "react-bootstrap";
import { useClientHooks } from "../../Hooks/useClientHooks";

import Grid from "../../Components/Grid/Grid";
import Modals from "../../Components/General/Modals";
import ToastMsj from "../General/Toast";

const List = () => {
	const [showModal, setShowModal] = useState({ value: false, data: {} });

	const {
		handleGetAll,
		data,
		columns,
		client,
		setClient,
		handleChange,
		handleSave,
		handleModify,
		handleDelete,
		sideWindows,
		setSideWindows,
		handleSideWindows,
	} = useClientHooks({});

	useEffect(() => {
		console.log("solo 1 vez");
		handleGetAll();
	}, []);

	return (
		<div>
			<h5>Clients</h5>
			<Grid data={data} columns={columns} />
			{/*
{showModal.value && (
				<Modals
					title="Delete"
					msg={`Are you sure delete Id: ${showModal.data.Id}, 
							Identification: ${showModal.data.Identification},
							Name: ${showModal.data.Name} 
					`}
					nameButton="Delete"
					functionButton={() => alert("deleted")}
					//modal
					showModal={showModal}
					setShowModal={setShowModal}
				/>
			)}
				*/}
		</div>
	);
};

export default List;
