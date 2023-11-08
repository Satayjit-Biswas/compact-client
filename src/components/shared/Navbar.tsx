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
				<div className="flex items-center justify-between h-[70px]  lg:h-[80px]">
					<div className="loge">
						<Link href="/">
							<Image
								src={logo}
								alt="logo"
								width={180}
								height={180}
								className="w-[120px] lg:w-[180px] md:w-[130px] "
							/>
						</Link>
					</div>
					<div className="menu">
						{links.map((link) => (
							<Link
								className="capitalize navbar__link"
								key={link.id}
								href={link.url}
							>
								{link.title}
							</Link>
						))}
						<Link href="#" className="custom_btn ml-[5px]">
							logo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
