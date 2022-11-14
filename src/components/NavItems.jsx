import React from "react";
import { HiOutlineUser, HiOutlineCode, HiOutlineLightningBolt, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const NavItems = () => {
	const navigations = [
		{ name: "About", url: "about", icon: <HiOutlineUser className="hidden w-5 h-5 md:block" /> },
		{ name: "Services", url: "services", icon: <HiOutlineLightningBolt className="hidden w-5 h-5 md:block" /> },
		{ name: "Skills", url: "skills", icon: <HiOutlineCode className="hidden w-5 h-5 md:block" /> },
		{ name: "Contact", url: "contact", icon: <HiOutlineMail className="hidden w-5 h-5 md:block" /> },
	];

	return (
		<div className="flex flex-row items-center justify-center m-1 cursor-pointer">
			{navigations.map(({ name, url, icon }, index) => (
				<Link to={url} spy={true} smooth={true} offset={-70} duration={500} key={index}>
					<button
						type="button"
						key={index}
						className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-black/5 dark:hover:bg-white/5 py-1 px-1.5 md:py-2 md:px-4"
					>
						{icon}
						<div className="pl-1.5 hidden lg:block">{name}</div>
					</button>
				</Link>
			))}
		</div>
	);
};

export default NavItems;
