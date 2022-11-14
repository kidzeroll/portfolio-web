import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views";
import Error404 from "./views/errors/Error404";

const App = () => {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default App;
