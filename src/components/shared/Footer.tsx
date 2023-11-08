import logo from "@/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
	return (
		<div className="bg-[#FF6801]">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 max-sm:gap-[10px] gap-[30px] py-[50px] lg:py-[30px]">
					<div className="box">
						<Image src={logo} alt="logo" width={180} height={180} />
						<p className="text-black my-[25px] font-light text-[14px]">
							Discover the best deals and compare prices across a
							wide range of products. Our mission is to simplify
							your shopping experience by providing accurate and
							up-to-date information.
						</p>
					</div>
					<div className="box footer-link">
						<h3>Quick Link</h3>
						<ul>
							<li>
								<Link href="/">About Us</Link>
							</li>
							<li>
								<Link href="/">Contact Us</Link>
							</li>
							<li>
								<Link href="/">Policy</Link>
							</li>
							<li>
								<Link href="/">Why Use</Link>
							</li>
						</ul>
					</div>
					<div className="box">
						<h3>Contact Us</h3>
						<p>Email: contact@comparison.com</p>
						<p className="my-[10px]">Phone: +1234567890</p>
						<p>
							Address: 123 Main Street, Citytown, NY 12345, United
							States
						</p>
					</div>
					<div className="box">
						<h3>Follow Us</h3>
						<p className="mb-[20px]">
							Stay connected via our social media channels for the
							latest updates and offers.
						</p>
						<div className="sociel flex align-middle">
							<Link href="/">
								<BiLogoFacebook />
							</Link>
							<Link href="/">
								<AiOutlineTwitter />
							</Link>
							<Link href="/">
								<CiInstagram />
							</Link>
							<Link href="/">
								<AiOutlineYoutube />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
