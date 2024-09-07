import apiClient from "@/api/axios";
import { LoginFormData } from "@/components/forms/LoginForm";
import { SignUpFormValues } from "@/components/forms/SignUpForm";
import { LoginResponse, SignUpResponse, Response } from "@/types";
import { AxiosError } from "axios";

async function loginUser(payload: LoginFormData) {
	try {
		const res = await apiClient.post<Response<LoginResponse>>(
			"/auth/login",
			payload
		);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
}

async function onBoardUser(payload: SignUpFormValues) {
	try {
		const res = await apiClient.post<Response<SignUpResponse>>(
			"/auth/onboard",
			payload
		);
		return res.data;
	} catch (error) {
		throw error as AxiosError;
	}
}

export { loginUser, onBoardUser };
