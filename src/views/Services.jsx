import React from "react";
import { GrMysql } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineWifi } from "react-icons/ai";
import Card from "../components/Card";
import { motion } from "framer-motion";

const Services = () => {
	const data = [
		{
			title: "Web Designer",
			description: "Create design and mockup of web page.",
			icon: <AiOutlineAntDesign className="w-6 h-6 stroke-2" />,
		},
		{
			title: "Web Development",
			description: "Create a website and develop this website.",
			icon: <FaMobileAlt className="w-6 h-6 stroke-2" />,
		},
		{
			title: "API",
			description: "Create a Application Programming Interface and consume this.",
			icon: <AiOutlineWifi className="w-6 h-6 stroke-2" />,
		},
		{
			title: "Database",
			description: "Designing and creating a database using MySQL.",
			icon: <GrMysql className="w-6 h-6 stroke-2" />,
		},
	];

	return (
		<section id="services" className="py-5 xs:py-10 px-4 md:py-16 md:px-7 bg-default dark:bg-defaultDark">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex flex-col text-center lg:max-w-[500px] m-auto mb-4 xs:mb-10 px-1"
			>
				<h3 className="text-2xl md:text-4xl capitalize font-bold mb-3">Services</h3>
				<p className="text-sm capitalize text-textSecondary dark:text-textDarkSecondary/60">What can I do?</p>
			</motion.div>

			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="max-w-[1140px] m-auto "
			>
				<div className="flex flex-wrap justify-center items-center">
					{data.map(({ title, description, icon }, index) => (
						<Card key={index} icon={icon} title={title} description={description} />
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Services;
