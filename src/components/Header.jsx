import React, { useRef } from "react";
import DarkSwitcher from "./DarkSwitcher";
import { Link } from "react-scroll";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full transition-shadow duration-700 shadow-sm backdrop-blur-sm bg-paper/70 dark:bg-paperDark/70 text-textPrimary dark:text-textDarkPrimary">
			<div className="flex items-start justify-between max-w-[1140px] mx-auto">
				{/* left side */}
				<div className="flex flex-row items-center p-2.5 cursor-pointer my-auto">
					<Link to="top" spy={true} smooth={true} offset={-70} duration={500}>
						<h1 className="text-lg font-bold md:text-xl">Kidzeroll</h1>
					</Link>
				</div>

				{/* right side */}
				<nav className="flex flex-row items-center p-2.5 cursor-pointer">
					<NavItems />
					<MobileNav />
					<DarkSwitcher />
				</nav>
			</div>
			<div id="header-bar" className="border-b-[2px] border-primary w-0" />
		</header>
	);
};

export default Header;
