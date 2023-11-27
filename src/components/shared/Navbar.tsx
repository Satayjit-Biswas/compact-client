"use client";

import logo from "@/assets/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Find-Product",
		url: "/find-product",
	},
	{
		id: 3,
		title: "Price-Comparison",
		url: "/price-comparison",
	},
	{
		id: 5,
		title: "About",
		url: "/about",
	},
	{
		id: 6,
		title: "Contact",
		url: "/contact",
	},
];
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const handleOutSideClick = (event: any) => {
			if (ref.current == event.target) {
				setNavbar(!navbar);
			} else {
				setNavbar(false);
			}
		};
		window.onclick = function (e) {
			handleOutSideClick(e);
		};
		window.addEventListener("scroll", () => {
			if (window.scrollY > 10) {
				setNavbar(false);
			}
		});
	}, [navbar]);

	return (
		<div className="shadow shadow-[#ff670163] border-b-[1px] border-[#ff6701b2]">
			<div className="container">
				<div className="flex items-center justify-between h-[70px]  lg:h-[80px]">
					<div className="loge z-40">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={180}
								height={180}
								className="w-[120px] lg:w-[180px] md:w-[130px]"
							/>
						</Link>
					</div>
					{/* main menu  */}
					<div className="menu max-md:hidden">
						{links.map((link) => (
							<div key={link.id} className="inline-block">
								<Link
									className="capitalize navbar__link"
									href={link.url}
								>
									{link.title}
								</Link>
							</div>
						))}
						<Link href="#" className="custom_btn ml-[5px]">
							login
						</Link>
					</div>
					{/* nav toggle button */}

					<div className="navbar group md:hidden" ref={ref}>
						<span
							className={`navbar_span1 ${
								navbar
									? "after:rotate-45 after:top-[50%] after:translate-y-[-50%]"
									: ""
							}`}
						></span>
						<span
							className={`navbar_span2 ${
								navbar ? "after:hidden" : ""
							}`}
						></span>
						<span
							className={`navbar_span3 ${
								navbar
									? "after:rotate-[-45deg] after:top-[50%] after:translate-y-[-50%]"
									: ""
							}`}
						></span>
					</div>
					{/* navmenu  */}

					<div
						className={`tab-menu md:hidden ${
							navbar ? "" : "left-[100%]"
						}`}
					>
						<div>
							{links.map((link) => (
								<div key={link.id}>
									<Link
										className="capitalize tab_navbar__link"
										href={link.url}
									>
										{link.title}
									</Link>
								</div>
							))}
							<div>
								<Link href="#" className="custom_btn ml-[5px] ">
									login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
