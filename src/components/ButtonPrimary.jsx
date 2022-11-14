import React from "react";

const ButtonPrimary = ({ children, href, ...props }) => {
	return (
		<a href={href} {...props}>
			<div className="outline-none text-xs md:text-sm text-white bg-gradient-to-r from-primary/80 via-secondary/60 to-secondary/80 hover:from-primary hover:via-secondary/80 hover:to-secondary transition-all duration-300 font-medium rounded-lg opacity-90 hover:opacity-100 py-2.5 px-4 text-center flex justify-center items-center">
				{children}
			</div>
		</a>
	);
};

export default ButtonPrimary;
