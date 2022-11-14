import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";

const AppLayout = ({ children }) => {
	return (
		<div>
			<div id="top" />
			<div className="relative flex flex-col min-h-screen font-poppins bg-default dark:bg-defaultDark text-textPrimary dark:text-textDarkPrimary">
				<Header />
				<ScrollTop />
				<main className="flex-grow font-poppins bg-default dark:bg-defaultDark">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default AppLayout;
