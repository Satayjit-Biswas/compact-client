"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { toast } from "react-toastify";
import { loginSchema } from "../../../schemas/form";
import { LoginType } from "../shared/Type";

const Login = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginType>({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<LoginType> = async (data) => {
		try {
			// Send data to the server using axios or fetch
			const response = await axios.post(
				`http://localhost:5000/api/user/login`,
				data
			);
			// Assuming the server provides a token in the response
			const token = response.data.token;

			// Set the token as a cookie
			Cookies.set("RefreshToken", token); // Set cookie to expire in 7 days

			// console.log(data);
			// console.log(response.data.token);

			// console.log(setuser);

			toast.success("Successfully Login Account");
			router.push("/priceComparison");
		} catch (error) {
			// Handle error, e.g., show error message
			// console.log(error);
			toast.error("Sorry Wrong Information");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="mt-[10px] block">User Gmail</label>
				<div className="login_input relative mt-[8px]">
					<LuUser className="absolute text-[18px] left-[8px] top-[10px]" />
					<input
						type="text"
						{...register("email")}
						placeholder="Type Your Email"
					/>
					<p className="text-white text-[12px]">
						{errors.email?.message}
					</p>
				</div>
				<label className="mt-[10px] block">Password</label>
				<div className="login_input relative mt-[8px]">
					<CiLock className="absolute text-[18px] left-[8px] top-[10px]" />
					<input
						type="password"
						{...register("password")}
						placeholder="Type Your Password"
					/>
					<p className="text-white text-[12px]">
						{errors.password?.message}
					</p>
				</div>
				<div className="text-center">
					<button
						type="submit"
						className="custom_btn mt-[20px] bg-white text-black"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
