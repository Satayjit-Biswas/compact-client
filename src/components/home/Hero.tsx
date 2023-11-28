import hero from "@/assets/hero.gif";

const Hero = () => {
	return (
		<div
			className="hero min-h-screen bg-center	bg-cover	"
			style={{
				backgroundImage: `url(${hero.src})`,
			}}
		>
			<div className=" bg-opacity-60"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md"></div>
			</div>
		</div>
	);
};

export default Hero;
