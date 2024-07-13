import React from "react";
import { Container } from "react-bootstrap";
import Menu from "../../Components/General/Menu";
import Footer from "../../Components/General/Footer";
import Welcome from "../../Components/General/Welcome";
import Task from "../../Components/General/Task";
import Kpi from "../../Components/Kpi/Kpi";

const Index = () => {
	return (
		<div>
			<Menu />
			{
				// change depending of the options
			}
			<Container>
				<Welcome />
				<Task />
				<Kpi />
			</Container>
			<Footer />
		</div>
	);
};

export default Index;
