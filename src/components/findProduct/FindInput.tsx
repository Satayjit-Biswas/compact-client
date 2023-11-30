const FindInput = () => {
	return (
		<div>
			<div className="container">
				<h3 className="text-[40px] text-center mb-[20px] capitalize">
					Find Your Product
				</h3>
				<div className="flex justify-center items-center ">
					<div className="w-[400px] text-center">
						<input
							className="w-[100%] py-[12px] px-[10px] text-[14px] focus-visible:outline-[0px] border-[2px] border-[#FF6801] focus:border-[#000000] duration-[.3s]"
							type="text"
							name=""
							id=""
							placeholder="Type Your Product Name"
						/>
						<button
							type="submit"
							className="custom_btn mt-[20px] text-black"
						>
							Find Product
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FindInput;
