"use client";

import logo from "@/assets/logo1.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import ProfileMenu from "./ProfileMenu";

const links = [
	{
		id: 1,
		title: "Home",
		url: "/",
	},
	{
		id: 2,
		title: "Find-Product",
		url: "/findProduct",
	},
	{
		id: 3,
		title: "Price-Comparison",
		url: "/priceComparison",
	},
	{
		id: 5,
		title: "About",
		url: "/about",
	},
];

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const [navsticky, setnavsticky] = useState(false);
	const ref = useRef(null);

	// const { userdata } = GetUserData();

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
			if (window.scrollY > 150) {
				setNavbar(false);
				setnavsticky(true);
			} else {
				setnavsticky(false);
			}
		});
	}, [navbar]);
	return (
		<div
			className={`flex items-center justify-between shadow shadow-[#ff670163] border-b-[1px] border-[#ff6701b2] bg-white duration-300 sticky top-0 last:0 h-[70px] ${
				navsticky ? "lg:h-[80px]" : "lg:h-[90px]"
			} z-10`}
		>
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			></ToastContainer>
			<div className="container">
				<div className="flex items-center justify-between">
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
					<div className="max-md:hidden flex items-center">
						{links.map((link) => (
							<Link
								className="capitalize navbar__link"
								href={link.url}
								key={link.id}
							>
								{link.title}
							</Link>
						))}
						<Link href="/login" className="custom_btn ml-[5px]">
							login
						</Link>
						<ProfileMenu></ProfileMenu>

						{/* {userdata.email ? (
							<ProfileMenu></ProfileMenu>
						) : (
							<Link href="/login" className="custom_btn ml-[5px]">
								login
							</Link>
						)} */}
					</div>
					{/* nav toggle button */}

					<div className="toggle_icon group md:hidden" ref={ref}>
						<span
							className={`toggle_icon1 ${
								navbar
									? "after:rotate-45 after:top-[50%] after:translate-y-[-50%]"
									: ""
							}`}
						></span>
						<span
							className={`toggle_icon2 ${
								navbar ? "after:hidden" : ""
							}`}
						></span>
						<span
							className={`toggle_icon3 ${
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

							{/* {userdata.name ? (
								<ProfileMenu></ProfileMenu>
							) : (
								<div>
									<Link
										href="/login"
										className="custom_btn ml-[5px] "
									>
										login
									</Link>
								</div>
							)} */}

							<div>
								<Link
									href="/login"
									className="custom_btn ml-[5px] "
								>
									login
								</Link>
							</div>

							<ProfileMenu></ProfileMenu>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
