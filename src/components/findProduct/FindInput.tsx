"use client";

import { FaCamera } from "react-icons/fa";

const FindInput = () => {
	// const [product, setProduct] = useState();

	// const fetchData = async () => {
	// 	const options = {
	// 		method: "GET",
	// 		url: "https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/Samsung",
	// 		headers: {
	// 			"X-RapidAPI-Key":
	// 				"645e82075emshdc4610575c1025cp1262a7jsn56dcfd56848d",
	// 			"X-RapidAPI-Host": "mobile-phone-specs-database.p.rapidapi.com",
	// 		},
	// 	};
	// 	try {
	// 		const response = await axios.request(options);
	// 		setProduct(response.data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };
	// useEffect(() => {
	// 	fetchData(); // Call the asynchronous function
	// }, []); // Pass an empty dependency array to run the effect only once when the component mounts

	// console.log(product);

	return (
		<div>
			<div className="container">
				<h3 className="text-[40px] text-center mb-[20px] capitalize">
					Find Your Product
				</h3>
				<div className="flex justify-center items-center ">
					<div className="w-[400px] text-center relative">
						<input
							className="w-[100%] py-[12px] px-[10px] text-[14px] focus-visible:outline-[0px] border-[2px] border-[#FF6801] focus:border-[#000000] duration-[.3s]"
							type="text"
							name=""
							id=""
							placeholder="Type Your Product Name"
						/>
						<label
							htmlFor="myfile"
							className="absolute top-[17px] right-[10px] cursor-pointer hover:text-[#FF6801] duration-300"
						>
							<FaCamera />
						</label>
						<input
							type="file"
							id="myfile"
							name="myfile"
							className="hidden"
						></input>
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
