import Accordion from "@/components/home/Accordion";
import Available from "@/components/home/Available";
import Hero from "@/components/home/Hero";
import Gap from "@/components/shared/Gap";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Gap></Gap>
			<Available></Available>
			<Gap></Gap>
			<Accordion></Accordion>
			<Gap></Gap>
		</div>
	);
};

export default Home;
