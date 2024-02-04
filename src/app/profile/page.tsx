"use client";

// import { GetUserData } from "@/utils/helpers";

const page = () => {
	// const { userdata } = GetUserData();
	return (
		<section className="container">
			<div className="flex items-center justify-center h-[90vh]">
				<div className="login_box">
					<div className="info">
						<p>Name : ---------------</p>
						{/* <p className="text-white">{userdata.name}</p> */}
						<p>Email :----------------</p>
						{/* <p className="text-white">{userdata.email}</p> */}
						{/* <p>{`${email}`}</p> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
