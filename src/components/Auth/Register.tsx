"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { toast } from "react-toastify";
import { regSchema } from "../../../schemas/form";
import { RegisterType } from "../shared/Type";

const Register = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterType>({
		resolver: yupResolver(regSchema),
	});

	const onSubmit: SubmitHandler<RegisterType> = async (data) => {
		try {
			// Send data to the server using axios or fetch
			const response = await axios.post(
				`http://localhost:5000/api/user/register`,
				data
			);
			toast.success("Successfully Create Account");
			router.push("/priceComparison");
		} catch (error) {
			// Handle error, e.g., show error message
			console.error("Error sending data to the server:", error);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label className="mt-[10px] block">Name</label>
				<div className="login_input relative mt-[8px]">
					<CiLock className="absolute text-[18px] left-[8px] top-[10px]" />
					<input
						type="text"
						{...register("name")}
						placeholder="Type Your Password"
					/>
					<p className="text-white text-[12px]">
						{errors.name?.message}
					</p>
				</div>
				<label className="mt-[10px] block">User Gmail</label>
				<div className="login_input relative mt-[8px]">
					<LuUser className="absolute text-[18px] left-[8px] top-[10px]" />
					<input
						type="text"
						{...register("email")}
						placeholder="Type Your Gmail"
					/>
					<p className="text-white text-[12px]">
						{errors.email?.message}
					</p>
				</div>
				<label className="mt-[10px] block">New Password</label>
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
						register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
