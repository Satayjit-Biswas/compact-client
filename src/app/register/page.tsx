// "use client";

import Register from "@/components/Auth/Register";
import Link from "next/link";

const page = () => {
	// const [name, setName] = useState([]);

	return (
		<section className="container">
			<div className="flex items-center justify-center h-[90vh]">
				<div className="login_box">
					<h3 className="text-center mb-[30px] text-[25px]">
						Registration
					</h3>
					<Register></Register>
					<div className="text-center">
						<Link className="capitalize" href="/login">
							login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
