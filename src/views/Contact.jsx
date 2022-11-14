import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
	const data = [
		{
			name: "Github",
			icon: <FaGithub className="w-full h-full rounded-full cursor-pointer" />,
			href: "https://github.com/kidzeroll",
		},
		{
			name: "Whatsapp",
			icon: <FaWhatsapp className="w-full h-full rounded-full cursor-pointer" />,
			href: "https://wa.me/6282362568088",
		},
		{
			name: "Telegram",
			icon: <FaTelegram className="w-full h-full rounded-full cursor-pointer" />,
			href: "https://t.me/kidzeroll",
		},
		{
			name: "Instagram",
			icon: <FaInstagram className="w-full h-full rounded-full cursor-pointer" />,
			href: "https://www.instagram.com/kidz.eroll/",
		},
		{
			name: "Linkedin",
			icon: <FaLinkedin className="w-full h-full rounded-full cursor-pointer" />,
			href: "https://www.linkedin.com/in/muhammad-haykal-53642b249",
		},
	];

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_vex65k1", "template_nlezysh", form.current, "KQUhdW4JyjiD_1GZN");
		e.target.reset();
	};

	const initialState = { email: "", name: "", message: "" };
	const [userData, setUserData] = useState(initialState);
	const { email, name, message } = userData;
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	return (
		<section id="contact" className="py-5 xs:py-10 px-4 md:py-16 md:px-7 bg-paper/80 dark:bg-paperDark/80 font-poppins">
			<div className="max-w-[1140px] m-auto ">
				<div className="p-8 rounded-xl w-full flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6">
					{/* contact information */}
					<motion.div
						initial={{ x: -20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className="flex flex-col space-y-8 justify-between"
					>
						<div>
							<h1 className="text-2xl md:text-4xl capitalize font-bold mb-3">Contact Us</h1>
							<p className="pt-2 text-sm capitalize text-textSecondary dark:text-textDarkSecondary/60">
								I am approximately on every social media platform. You can also mail me anytime, I will reply within 24 hours
							</p>
						</div>

						<div className="flex flex-col space-y-6 text-sm md:text-lg">
							<div className="inline-flex items-center space-x-2">
								<ion-icon name="mail"></ion-icon>
								<span>developer.kidzeroll@gmail.com</span>
							</div>
							<div className="inline-flex items-center space-x-2">
								<ion-icon name="call"></ion-icon>
								<span>+62-823-6256-8088</span>
							</div>
							<div className="inline-flex items-center space-x-2">
								<ion-icon name="location"></ion-icon>
								<span>Kota Jantho - 23911, Aceh, Indonesia</span>
							</div>
						</div>

						<div className="flex space-x-4 text-lg md:text-2xl">
							{data.map(({ icon, href }, index) => (
								<a href={href} key={index} target="_blank">
									{icon}
								</a>
							))}
						</div>
					</motion.div>

					{/* contact form */}
					<motion.div
						initial={{ x: 20, opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						transition={{ duration: 1 }}
						className=""
					>
						<div className="bg-paper/90 dark:bg-paperDark/90 rounded-lg shadow-lg p-8">
							<form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
								<div>
									<label className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">Your Name</label>

									<input
										type="text"
										id="name"
										name="name"
										value={name}
										onChange={handleInputChange}
										className="w-full rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary text-xs outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-paperDark bg-paper"
									/>
								</div>

								<div>
									<label className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">Your Email</label>

									<input
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={handleInputChange}
										className="w-full rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary text-xs outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-paperDark bg-paper"
									/>
								</div>
								<div>
									<label className="leading-7 text-sm mb-2 text-textPrimary/70 dark:text-textDarkPrimary/70">Your Message</label>

									<textarea
										id="message"
										name="message"
										value={message}
										onChange={handleInputChange}
										className="w-full dark:bg-paperDark bg-paper rounded-xl border-primary/20 focus:border-primary/80 border-2 focus:primary focus:ring-2 focuprimary h-32 text-xs outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									/>
								</div>
								<button
									disabled={!email || !name || !message}
									type="submit"
									className="disabled:bg-paperDark dark:disabled:bg-paper disabled:text-textDarkPrimary dark:disabled:text-textPrimary text-white text-center bg-primary hover:bg-secondary focus:outline-none outline-none font-medium rounded-lg text-sm p-1 px-1.5 m-1 md:px-3 md:py-2 transition-all duration-300"
								>
									Submit
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
