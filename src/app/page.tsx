import Hero from "@/components/home/Hero";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<div className="container">
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Click to open this one and close others
					</div>
					<div className="collapse-content">
						<p>hello</p>
					</div>
				</div>
				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Click to open this one and close others
					</div>
					<div className="collapse-content">
						<p>hello</p>
					</div>
				</div>
				<div className="collapse collapse-plus bg-base-200">
					<input type="radio" name="my-accordion-3" />
					<div className="collapse-title text-xl font-medium">
						Click to open this one and close others
					</div>
					<div className="collapse-content">
						<p>hello</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
