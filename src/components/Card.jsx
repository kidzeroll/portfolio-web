import React from "react";

const Card = ({ icon, title, description }) => {
	return (
		<div className=" w-full sm:w-1/2 lg:w-1/4">
			<div className="select-none relative m-2 z-20 shadow-normal hover:bg-primary overflow-hidden text-center rounded-xl cursor-default transition duration-300 group bg-paper dark:bg-paperDark dark:hover:bg-primary shadow-lg">
				<div className="p-6 flex justify-center flex-col">
					<div className="mb-4 flex justify-center items-center">
						<div className="w-[60px] h-[60px] flex justify-center transition duration-300 items-center bg-primary text-white rounded-full group-hover:text-primary group-hover:bg-white">
							{icon}
						</div>
					</div>
					<h3 className="text-lg capitalize transition duration-300 mb-3 font-bold group-hover:text-white">{title}</h3>
					<p className="text-xs capitalize opacity-80 transition duration-300 text-textSecondary dark:text-textDarkSecondary group-hover:text-white">
						{description}
					</p>
				</div>
				<div className="z-10 opacity-0 group-hover:opacity-100">
					<span className="top-0 right-0 absolute">
						<svg width="218" height="109" viewBox="0 0 218 109" fill="none" xmlns="http://www.w3.org/2000/svg">
							<circle opacity="0.05" cx="156.5" cy="-47.5" r="156.5" fill="white"></circle>
							<circle opacity="0.08" cx="210" cy="6" r="62" fill="white"></circle>
						</svg>
					</span>
					<span className="bottom-0 left-0 absolute">
						{/* prettier-ignore */}
						<svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21.262" cy="1.12081" r="1.12081" transform="rotate(90 21.262 1.12081)" fill="white"></circle>
                        <circle cx="21.262" cy="30.4863" r="1.12081" transform="rotate(90 21.262 30.4863)" fill="white"></circle>
                        <circle cx="1.76005" cy="1.12081" r="1.12081" transform="rotate(90 1.76005 1.12081)" fill="white"></circle>
                        <circle cx="1.76005" cy="30.4863" r="1.12081" transform="rotate(90 1.76005 30.4863)" fill="white"></circle>
                        <circle cx="11.6228" cy="1.12081" r="1.12081" transform="rotate(90 11.6228 1.12081)" fill="white"></circle>
                        <circle cx="11.6228" cy="30.4863" r="1.12081" transform="rotate(90 11.6228 30.4863)" fill="white"></circle>
                        <circle cx="21.262" cy="10.9839" r="1.12081" transform="rotate(90 21.262 10.9839)" fill="white"></circle>
                        <circle cx="1.76005" cy="10.9839" r="1.12081" transform="rotate(90 1.76005 10.9839)" fill="white"></circle>
                        <circle cx="11.6228" cy="10.9839" r="1.12081" transform="rotate(90 11.6228 10.9839)" fill="white"></circle>
                        <circle cx="21.262" cy="20.8469" r="1.12081" transform="rotate(90 21.262 20.8469)" fill="white"></circle>
                        <circle cx="1.76005" cy="20.8469" r="1.12081" transform="rotate(90 1.76005 20.8469)" fill="white"></circle>
                        <circle cx="11.6228" cy="20.8469" r="1.12081" transform="rotate(90 11.6228 20.8469)" fill="white"></circle>
                    </svg>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
