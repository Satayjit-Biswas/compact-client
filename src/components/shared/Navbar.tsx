import logo from "@/assets/logo1.png";
import Image from "next/image";
import Link from "next/link";

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
		id: 4,
		title: "Blog",
		url: "/blog",
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
	return (
		<div className="shadow shadow-[#ff670163] border-b-[1px] border-[#ff6701b2]">
			<div className="container">
				<div className="flex items-center justify-between h-[80px]">
					<div className="loge">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={180}
								height={180}
							/>
						</Link>
					</div>
					<div className="menu">
						{links.map((link) => (
							<Link
								className="mx-[15px] capitalize navbar__link"
								key={link.id}
								href={link.url}
							>
								{link.title}
							</Link>
						))}
						<Link
							href="#"
							className="inline-block bg-[#FF6801] duration-[300ms] hover:bg-[#d0611e] px-[18px] py-[7px] text-white capitalize rounded-[5px]"
						>
							logo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
