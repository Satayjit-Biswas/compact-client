import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

const page = () => {
	return (
		<section className="container">
			<div className="flex items-center justify-center h-[90vh]">
				<div className="login_box">
					<div>
						<div>
							<h3 className="text-center mb-[30px] text-[25px]">
								Registration
							</h3>
							<label className="mt-[10px] block">
								User Gmail
							</label>
							<div className="login_input relative mt-[8px]">
								<LuUser className="absolute text-[18px] left-[8px] top-[10px]" />
								<input
									type="text"
									placeholder="Type Your Gmail"
								/>
							</div>
							<label className="mt-[10px] block">New Password</label>
							<div className="login_input relative mt-[8px]">
								<CiLock className="absolute text-[18px] left-[8px] top-[10px]" />
								<input
									type="password"
									placeholder="Type Your Password"
								/>
							</div>
							<label className="mt-[10px] block">Same Password</label>
							<div className="login_input relative mt-[8px]">
								<CiLock className="absolute text-[18px] left-[8px] top-[10px]" />
								<input
									type="password"
									placeholder="Type Your Password"
								/>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="custom_btn mt-[20px] bg-white text-black"
								>
									register
								</button>
							</div>
						</div>
					</div>
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
