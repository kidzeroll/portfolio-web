import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Footer = () => {
	const data = {
		Navigation: [
			{
				name: "Home",
				url: "top",
			},
			{
				name: "About",
				url: "about",
			},
			{
				name: "Services",
				url: "services",
			},
			{
				name: "Skills",
				url: "skills",
			},
			{
				name: "Contact",
				url: "contact",
			},
		],
	};

	const Social = [
		{
			name: "Github",
			url: "https://github.com/kidzeroll",
		},
		{
			name: "Whatsapp",
			url: "https://wa.me/6282362568088",
		},
		{
			name: "Telegram",
			url: "https://t.me/kidzeroll",
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/kidz.eroll/",
		},
		{
			name: "Linkedin",
			url: "https://www.linkedin.com/in/muhammad-haykal-53642b249",
		},
	];

	return (
		<footer className="relative z-10 overflow-hidden dark:text-textDarkSecondary text-textSecondary bg-paper dark:bg-paperDark shadow-normal">
			<div className="container max-w-[1140px] px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="flex-shrink-0 w-64 mx-auto mt-10 mb-10 text-center md:mb-0 md:mx-0 md:text-left md:mt-0">
					<a className="flex items-center justify-center text-gray-800 md:justify-start dark:text-white">
						<span className="text-2xl font-bold">
							<Typewriter words={["Kidzeroll"]} loop="true" typeSpeed={150} deleteSpeed={50} delaySpeed={2000} />
							<Cursor cursorStyle="_" cursorColor="#5e7eff" />
						</span>
					</a>
					<p className="mt-2 text-md text-textSecondary opacity-80">
						Intermediate at - PHP, React & MySQL. A Fresh Graduate Love to play with DOMS, Laravel & React.
					</p>
				</div>
				<div className="flex flex-wrap justify-end flex-1 flex-grow -mb-10 text-center md:pl-20 md:text-right">
					{Object.keys(data).map((dt, dtIndex) => (
						<div key={dtIndex} className="w-full lg:w-1/4 md:w-1/2">
							<h2 className="mb-3 text-sm font-medium tracking-wider text-gray-800 capitalize dark:text-white">{dt}</h2>
							<nav className="mb-10 list-none">
								{data[Object.keys(data)[dtIndex]].map(({ name, url }, index) => (
									<li key={index}>
										<Link to={url} spy={true} smooth={true} duration={500} key={index}>
											<div className="text-sm text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-white">{name}</div>
										</Link>
									</li>
								))}
							</nav>
						</div>
					))}

					<div className="w-full lg:w-1/4 md:w-1/2">
						<h2 className="mb-3 text-sm font-medium tracking-wider text-gray-800 capitalize dark:text-white">Social Media</h2>
						<nav className="mb-10 list-none">
							{Social.map(({ name, url }, index) => (
								<li key={index}>
									<a href={url} key={index} target="_blank">
										<div className="text-sm text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-white">{name}</div>
									</a>
								</li>
							))}
						</nav>
					</div>
				</div>
			</div>

			<div className="max-w-[1140px] bg-opacity-75 z-30 mx-auto">
				<div className="container flex flex-col flex-wrap justify-between px-5 py-4 mx-auto capitalize md:font-semibold sm:flex-row">
					<p className="flex items-center justify-center text-sm text-center text-gray-400">
						Created With <span className="text-red-600 text-lg mx-1.5">♥</span> by Muhammad Haykal
					</p>
					<p className="text-sm text-center text-gray-400 sm:text-left">Copyright &copy; {new Date().getFullYear()}</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
