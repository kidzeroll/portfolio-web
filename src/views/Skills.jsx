import { motion } from "framer-motion";
import React from "react";
import { FaCss3Alt, FaGit, FaHtml5, FaJava, FaJs, FaLaravel, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
	const data = [
		{
			name: "React JS",
			icon: <FaReact className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "Laravel",
			icon: <FaLaravel className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "Git",
			icon: <FaGit className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "PHP",
			icon: <FaPhp className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "JavaScript",
			icon: <FaJs className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "HTML",
			icon: <FaHtml5 className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "MySQL",
			icon: <SiMysql className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
		{
			name: "CSS",
			icon: <FaCss3Alt className="w-full h-full rounded-full cursor-pointer text-primary group-hover:text-white" />,
		},
	];

	return (
		<section id="skills" className="py-5 xs:py-10 px-4 md:py-16 md:px-7 bg-default dark:bg-defaultDark">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="flex flex-col text-center lg:max-w-[500px] m-auto mb-4 xs:mb-10 px-1"
			>
				<h3 className="text-2xl md:text-4xl capitalize font-bold mb-3">Skills</h3>
				<p className="text-sm capitalize text-textSecondary dark:text-textDarkSecondary/60">
					Skills that i have learn and have an experience of over 1 years
				</p>
			</motion.div>
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="mx-auto flex md:flex-row-reverse flex-col-reverse justify-center items-center"
			>
				<div className="flex justify-center flex-wrap items-center max-w-[420px] m-auto">
					{data.map(({ icon }, index) => (
						<div
							key={index}
							className="border-[3px] cursor-pointer transition duration-300 border-primary p-2 m-2 rounded-full group hover:text-primary group-hover:text-white hover:bg-primary items-center justify-center flex"
						>
							<div className="w-[35px] h-[35px]">{icon}</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Skills;
