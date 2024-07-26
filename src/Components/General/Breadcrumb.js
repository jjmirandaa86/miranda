import React from "react";
import { BreadcrumbR } from "react-bootstrap";

const Breadcrumb = ({}) => {
	return (
		<>
			<BreadcrumbR>
				<BreadcrumbR.Item href="#">Home</BreadcrumbR.Item>
				<BreadcrumbR.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
					Library
				</BreadcrumbR.Item>
				<BreadcrumbR.Item active>Data</BreadcrumbR.Item>
			</BreadcrumbR>
		</>
	);
};

export default Breadcrumb;
