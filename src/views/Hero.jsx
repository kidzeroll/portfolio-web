import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { HiDownload, HiEye } from "react-icons/hi";
import { motion } from "framer-motion";
import CV from "../assets/cv.pdf";

const Hero = () => {
	return (
		<section
			id="intro"
			className="relative h-full py-10 md:py-20 overflow-x-clip xs:py-10 px-4 md:px-7 bg-default dark:bg-defaultDark font-poppins"
		>
			<div className="max-w-[1140px] m-auto flex flex-row justify-between items-center flex-wrap-reverse p-2">
				{/* left side */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="flex-grow text-center lg:text-start w-1/2"
				>
					<h3 className="text-2xl md:text-4xl mb-2 font-semibold">
						Hello <motion.span>👋</motion.span>, I'am -
					</h3>
					<h1 className="text-4xl md:text-6xl mb-2 font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
						Muhammad Haykal
					</h1>
					<h3 className="font-semibold text-lg capitalize opacity-90">
						<Typewriter
							words={["UI/UX Designer ,-", "Fullstack Developer ,-", "Backend Developer ,-", "Frontend Developer."]}
							loop="true"
							typeSpeed={150}
							deleteSpeed={50}
							delaySpeed={2000}
						/>
						<Cursor cursorStyle="_" cursorColor="#5e7eff" />
					</h3>
					<div className="w-24 h-1 bg-primary bg-opacity-70 mt-6 mb-4">
						<div className="w-10 h-1 bg-primary"></div>
					</div>
					<p className="mb-6 mt-2 xl:w-[80%] leading-relaxed text-textSecondary font-medium dark:text-textDarkSecondary opacity-50 text-xs md:text-sm">
						Intermediate at - PHP, React & MySQL. <br /> A Fresh Graduate Love to play with DOMS, Laravel & React.
					</p>

					<div className="flex flex-wrap justify-center lg:justify-start gap-x-3">
						<div>
							<ButtonPrimary href={CV} download="">
								<HiDownload className="mr-2 w-5 h-5" />
								Download CV
							</ButtonPrimary>
						</div>
						<div>
							<ButtonSecondary href="https://github.com/kidzeroll?tab=repositories" target="_blank">
								<HiEye className="mr-2 w-5 h-5" />
								View Projects
							</ButtonSecondary>
						</div>
					</div>
				</motion.div>

				{/* right side */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1.5 }}
					className="mb-6 mx-auto text-center select-none relative"
				>
					<div className="hero__img"></div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
