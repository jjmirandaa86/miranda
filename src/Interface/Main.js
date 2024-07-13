import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../Components/General/Menu";
import Footer from "../Components/General/Footer";
import Body from "../Components/General/Body";

const Main = () => {
	return (
		<div>
			<Menu />
			{
				// change depending of the options
			}
			<Container>
				<Body />
			</Container>
			<Footer />
		</div>
	);
};

export default Main;
