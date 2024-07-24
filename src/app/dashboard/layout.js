import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../../Components/General/Menu";
import Footer from "../../Components/General/Footer";

const RootLayout = ({ children }) => {
	return (
		<>
			layout second
			<Menu />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default RootLayout;
