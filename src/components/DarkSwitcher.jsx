import React, { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const DarkSwitcher = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const switcher = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};
	return (
		<button
			type="button"
			onClick={switcher}
			className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-black/5 dark:hover:bg-white/5 py-1 px-1.5 md:py-2 md:px-4"
		>
			{theme == "light" ? <HiOutlineMoon className="w-5 h-5" /> : <HiOutlineSun className="w-5 h-5" />}
		</button>
	);
};

export default DarkSwitcher;
