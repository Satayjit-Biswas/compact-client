import Login from "@/components/Auth/Login";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

const page = () => {
	return (
		<section className="container">
			<div className="flex items-center justify-center h-[90vh]">
				<div className="login_box">
					<div>
						<div>
							<h3 className="text-center mb-[30px] text-[25px]">
								Login
							</h3>
							<Login></Login>
						</div>
						<p className="text-center text-white mt-[20px] capitalize">
							login with others
						</p>
						<div className="sociel justify-center mt-[10px]">
							<Link href="/">
								<FaGoogle />
							</Link>
							<Link href="/">
								<FaXTwitter />
							</Link>
							<Link href="/">
								<FaFacebookF />
							</Link>
						</div>
					</div>
					<div className="text-center">
						<Link className="capitalize" href="/register">
							register
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
