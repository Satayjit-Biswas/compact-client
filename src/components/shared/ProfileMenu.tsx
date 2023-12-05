import profile from "@/assets/profile.png";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
	return (
		<div className="join">
			<div className="dropdown dropdown-end">
				<div
					tabIndex={0}
					role="button"
					className="bg-[#ffffff] duration-[300ms] hover:bg-[#ffffff]  capitalize rounded-[50%] ml-[5px] w-[40px] h-[40px] border-[2px] border-[#FF6801] flex items-center justify-center overflow-hidden p-[7px]"
				>
					<Image
						src={profile}
						alt="logo"
						width={30}
						height={30}
						className="w-[30px] lg:w-[30px] md:w-[30px]"
					/>
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu p-2 shadow bg-base-100 mt-[10px] rounded-[0px] w-52"
				>
					<li>
						<Link
							href="/profile"
							className="hover:bg-[#FF6801] hover:text-[#ffffff] rounded-[0px]"
						>
							Profile
						</Link>
					</li>
					<li>
						<Link
							href="/scerchText"
							className="hover:bg-[#FF6801] hover:text-[#ffffff] rounded-[0px]"
						>
							Scerch Text
						</Link>
					</li>
					<li>
						<Link
							href="/viewProduct"
							className="hover:bg-[#FF6801] hover:text-[#ffffff] rounded-[0px]"
						>
							View Product
						</Link>
					</li>
					<li>
						<Link
							href="/logout"
							className="hover:bg-[#FF6801] hover:text-[#ffffff] rounded-[0px]"
						>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
