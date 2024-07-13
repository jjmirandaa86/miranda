"use client";

import React from "react";
import { Alert } from "react-bootstrap";

const AlertMsg = ({ color, hour, title, msg1, msg2 = null }) => {
	return (
		<>
			\
			<Alert variant={color}>
				<Alert.Heading>
					{title} {" - "} {hour}{" "}
				</Alert.Heading>
				<p>{msg1}</p>
				<hr />
				{msg2 === null ? null : <p className="mb-0">{msg2}</p>}
			</Alert>
		</>
	);
};

export default AlertMsg;
