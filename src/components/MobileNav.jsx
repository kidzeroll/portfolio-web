import React, { Fragment } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavitems from "./MobileNavitems";
import { Menu, Transition } from "@headlessui/react";

const MobileNav = () => {
	return (
		<Menu>
			<Menu.Button className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-black/5 dark:hover:bg-white/5 py-1 px-1.5 md:py-2 md:px-4 md:hidden">
				<AiOutlineMenu className="w-5 h-5" />
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items>
					<div className="fixed -right-10 top-6 py-4 px-4 w-56 rounded-tl-lg rounded-bl-lg overflow-hidden bg-paper dark:bg-paperDark shadow-lg">
						<MobileNavitems />
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default MobileNav;
