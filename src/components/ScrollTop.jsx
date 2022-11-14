import React, { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
import { Link } from "react-scroll";

const ScrollTop = () => {
	const [showButton, setShowButton] = useState(false);

	const onScroll = () => {
		let pixelsFromTop = window.scrollY;
		let documentHeight = document.body.clientHeight;
		let windowHeight = window.innerHeight;
		let difference = documentHeight - windowHeight;
		let percentage = (100 * pixelsFromTop) / difference;
		document.getElementById("header-bar").style.width = `${percentage}%`;
		window.scrollY > 1 ? setShowButton(true) : setShowButton(false);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	});

	return (
		<Link to="top" spy={true} smooth={true} duration={500}>
			<button
				type="button"
				className={`${
					!showButton && "scale-0"
				} scale-1 fixed bottom-5 right-5 z-[6000] shadow-2xl outline-none font-medium rounded-full text-sm p-2.5 flex bg-primary/80 text-white hover:bg-primary `}
			>
				<HiChevronUp className="w-5 h-5" />
			</button>
		</Link>
	);
};

export default ScrollTop;
