import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const About = () => {
	const socialLinks = [
		{ url: "https://github.com/kidzeroll", icon: <FaGithub className="w-5 h-5" /> },
		{ url: "https://wa.me/6282362568088", icon: <FaWhatsapp className="w-5 h-5" /> },
		{ url: "https://t.me/kidzeroll", icon: <FaTelegram className="w-5 h-5" /> },
		{ url: "https://www.instagram.com/kidz.eroll", icon: <FaInstagram className="w-5 h-5" /> },
		{ url: "https://www.linkedin.com/in/muhammad-haykal-53642b249", icon: <FaLinkedin className="w-5 h-5" /> },
	];

	return (
		<section id="about" className="relative py-5 xs:py-10 px-4 md:py-16 md:px-7 bg-default dark:bg-defaultDark font-poppins">
			<div className="max-w-[1140px] m-auto ">
				<div className="flex sm:flex-row justify-center flex-col px-4">
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full sm:w-1/2 mb-12 sm:mb-0"
					>
						<h1 className="capitalize sm:text-3xl text-2xl mb-2 font-bold">
							<span className="text-primary">Your </span>
							Never Fail
							<br />
							Until you stop
							<span className="text-primary ml-2">Trying.</span>
						</h1>
						<p className=" capitalize leading-relaxed text-xs md:text-sm text-textSecondary dark:text-textDarkSecondary">
							<span>- </span>
							<Typewriter words={["Albert Einstein"]} loop="true" typeSpeed={100} deleteSpeed={50} delaySpeed={2000} />
							<Cursor cursorStyle="|" cursorColor="#5e7eff" />
						</p>
					</motion.div>

					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="w-full sm:w-1/2"
					>
						<h1 className="capitalize title-font sm:text-2xl text-xl mb-2 font-semibold">Connect With Me</h1>
						<p className="leading-relaxed text-textSecondary text-xs md:text-sm dark:text-textDarkSecondary">
							I am approximately on every social media platform. You can also mail me anytime, I will reply within 24 hours
						</p>
						<div className="select-none capitalize flex my-4">
							{socialLinks.map(({ icon, url }, index) => (
								<a href={url} key={index} target="_blank">
									<div className="border-primary border-2 mr-3 mb-3 rounded-full p-2 text-primary hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
										{icon}
									</div>
								</a>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
