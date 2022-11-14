import React from "react";
const ButtonSecondary = ({ children, href, ...props }) => {
	return (
		<a href={href} {...props}>
			<div className="text-xs md:text-sm transition-all duration-300 font-medium rounded-lg opacity-90 hover:opacity-100 py-2.5 px-4 text-center flex justify-center items-center border-2 border-primary hover:bg-gradient-to-r hover:from-primary hover:via-secondary/80 hover:to-secondary hover:text-white text-primary">
				{children}
			</div>
		</a>
	);
};

export default ButtonSecondary;
