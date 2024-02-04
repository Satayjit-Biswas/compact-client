// "use client";

// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";
// import { useEffect, useState } from "react";

// type GetUserDataType = {
// 	_id: string;
// 	name: string;
// 	email: string;
// 	password: string;
// 	isAdmin: boolean;
// 	__v: number;
// 	refreshToken: string;
// };
// export const GetUserData = () => {
// 	const [userdata, setUserdata] = useState<any>({});

// 	// const email = setuser;
// 	useEffect(() => {
// 		const token = Cookies.get("RefreshToken");
// 		if (token) {
// 			const user = jwtDecode(token);
// 			if ("data" in user) {
// 				const userdatas = user.data;
// 				setUserdata(userdatas);
// 			}
// 		}
// 	}, []);

// 	return { userdata };
// };
