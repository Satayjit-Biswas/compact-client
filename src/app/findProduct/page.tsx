import FindInput from "@/components/findProduct/FindInput";
import FindProduct from "@/components/findProduct/FindProduct";
import Gap from "@/components/shared/Gap";

const page = () => {
	return (
		<div>
			<Gap></Gap>
			<FindInput></FindInput>
			<Gap></Gap>
			<FindProduct></FindProduct>
			<Gap></Gap>
		</div>
	);
};

export default page;
