import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

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
							<label className="mt-[10px] block">User Gmail</label>
							<div className="login_input relative mt-[8px]">
								<LuUser className="absolute text-[18px] left-[8px] top-[10px]" />
								<input
									type="text"
									placeholder="Type Your Gmail"
								/>
							</div>
							<label className="mt-[10px] block">Password</label>
							<div className="login_input relative mt-[8px]">
								<CiLock className="absolute text-[18px] left-[8px] top-[10px]" />
								<input
									type="password"
									placeholder="Type your password"
								/>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="custom_btn mt-[20px] bg-white text-black"
								>
									Login
								</button>
							</div>
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
