import * as yup from "yup";

export const regSchema = yup.object().shape({
	// Define your form fields and their validation rules here
	name: yup.string().required("Username is required"),
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});

export const loginSchema = yup.object().shape({
	// Define your form fields and their validation rules here
	email: yup.string().email("Invalid email").required("Email is required"),
	password: yup
		.string()
		.min(6, "Password must be at least 6 characters")
		.required("Password is required"),
});
