import { Menu } from "@headlessui/react";
import React from "react";
import { HiOutlineUser, HiOutlineCode, HiOutlineLightningBolt, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const MobileNavitems = () => {
	const navigations = [
		{ name: "About", url: "about", icon: <HiOutlineUser className=" w-5 h-5" /> },
		{ name: "Services", url: "services", icon: <HiOutlineLightningBolt className=" w-5 h-5" /> },
		{ name: "Skills", url: "skills", icon: <HiOutlineCode className=" w-5 h-5" /> },
		{ name: "Contact", url: "contact", icon: <HiOutlineMail className=" w-5 h-5" /> },
	];
	return (
		<Menu.Item as={"div"} className="block items-start cursor-pointer">
			{navigations.map(({ name, url, icon }, index) => (
				<Link to={url} spy={true} smooth={true} offset={-70} duration={500} key={index}>
					<button
						type="button"
						key={index}
						className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-black/5 dark:hover:bg-white/5 py-4 px-4 w-full"
					>
						{icon}
						<div className="pl-1.5">{name}</div>
					</button>
				</Link>
			))}
		</Menu.Item>
	);
};

export default MobileNavitems;
