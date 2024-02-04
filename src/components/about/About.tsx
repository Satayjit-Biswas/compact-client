import about from "@/assets/about.jpg";
import Image from "next/image";

const About = () => {
	return (
		<div className="container">
			<div className="hero min-h-screen">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
					<div className="about-img">
						<Image src={about} alt="s1" />
					</div>
					<div>
						<h1 className="text-5xl font-bold">About Us</h1>
						<h3 className="text-2xl font-bold mt-[30px]">
							Welcome to Compact
						</h3>
						<p className="py-6">
							At Compact, we are committed to simplifying your
							online shopping experience. Our platform is designed
							to empower consumers by providing a comprehensive
							and efficient product price comparison service
							across major e-commerce platforms, including
							Alibaba, Amazon, and eBay.
						</p>
						<h6 className="text-2xl font-bold mb-[15px]">
							What We Offer
						</h6>
						<ul className="list-disc ml-[15px]">
							<li className="my-[5px]">
								Product Price Comparison
							</li>
							<li className="my-[5px]">Real-Time Data</li>
							<li className="my-[5px]">
								User-Friendly Interface
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
