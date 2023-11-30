const Accordion = () => {
	return (
		<div className="container">
			<div className="collapse collapse-plus bg-base-200 mb-[20px]">
				<input type="radio" name="my-accordion-3" />
				<div className="collapse-title text-xl font-medium">
					What services does your product price comparison platform
					offer to users?
				</div>
				<div className="collapse-content">
					<p>
						Our platform offers a comprehensive product price
						comparison service across major e-commerce platforms
						like Alibaba, Amazon, and eBay. Users can search for
						products, compare prices, and make informed purchasing
						decisions.
					</p>
				</div>
			</div>
			<div className="collapse collapse-plus bg-base-200 mb-[20px]">
				<input type="radio" name="my-accordion-3" />
				<div className="collapse-title text-xl font-medium">
					How do you ensure accurate and up-to-date information in
					your price comparison service?
				</div>
				<div className="collapse-content">
					<p>
						We employ advanced web scraping techniques and regularly
						update our scraping algorithms to ensure accurate and
						real-time product pricing information. Our commitment is
						to provide users with the most current and reliable data
						for their comparison needs.
					</p>
				</div>
			</div>
			<div className="collapse collapse-plus bg-base-200 mb-[20px]">
				<input type="radio" name="my-accordion-3" />
				<div className="collapse-title text-xl font-medium">
					How do you address user concerns regarding data privacy and
					security?
				</div>
				<div className="collapse-content">
					<p>
						We take user privacy seriously. Our platform employs
						robust security measures, including encryption, secure
						coding practices, and user authentication.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
