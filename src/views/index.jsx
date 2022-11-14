import React from "react";
import AppLayout from "../layouts/AppLayout";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
	return (
		<AppLayout>
			<div className="background__img">
				<Hero />
				<About />
				<Services />
				<Skills />
				<Contact />
			</div>
		</AppLayout>
	);
};

export default Home;
