"use client";
import React from "react";
import ToastBootstrap from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { useSelector, useDispatch } from "react-redux";
import { resetMessage } from "../../Redux/Reducer/generalReducer";

const Toast = () => {
	const { active, title, msg, variantColor, hour, date } = useSelector(
		(state) => state.general.message,
	);

	const { position, animation, delay } = useSelector(
		(state) => state.configuration.message.toast,
	);

	const dispatch = useDispatch();

	return (
		<>
			<ToastContainer
				className="p-3"
				position={position}
				animation={animation}
				style={{ zIndex: 1 }}
			>
				<ToastBootstrap
					bg={variantColor.toLowerCase()}
					onClose={() => {
						dispatch(resetMessage());
					}}
					show={active}
					delay={delay}
					autohide
				>
					<ToastBootstrap.Header>
						<strong className="me-auto">{title}</strong>
						<small>
							{date} {hour}
						</small>
					</ToastBootstrap.Header>
					<ToastBootstrap.Body>{msg}</ToastBootstrap.Body>
				</ToastBootstrap>
			</ToastContainer>
		</>
	);
};

export default Toast;

/*

*/
