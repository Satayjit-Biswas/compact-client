import CompariInput from "@/components/priceComparison/CompariInput";
import Comparison from "@/components/priceComparison/Comparison";
import Gap from "@/components/shared/Gap";

const page = () => {
	return (
		<div>
			<Gap></Gap>
			<CompariInput></CompariInput>
			<Gap></Gap>
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
					<div className="amazon">
						<h3 className="text-[25px] text-center mb-[40px] border-b-[2px] border-b-[#FF6801] sticky top-[80px] py-[10px] z-[1] bg-[#ffffff]">
							Amazon Product
						</h3>
						<Comparison></Comparison>
					</div>
					<div className="Alibaba">
						<h3 className="text-[25px] text-center mb-[40px] border-b-[2px] border-b-[#FF6801] sticky top-[80px] py-[10px] z-[1]  bg-[#ffffff]">
							Alibaba Product
						</h3>
						<Comparison></Comparison>
					</div>
					<div className="eBay">
						<h3 className="text-[25px] text-center mb-[40px] border-b-[2px] border-b-[#FF6801] sticky top-[80px] py-[10px] z-[1]  bg-[#ffffff]">
							eBay Product
						</h3>
						<Comparison></Comparison>
					</div>
				</div>
			</div>

			<Gap></Gap>
		</div>
	);
};

export default page;
