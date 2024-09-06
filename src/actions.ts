import { AxiosError } from "axios";
import apiClient from "./api/axios";
import { LoginResponse, Response } from "./types";
import { LoginFormData } from "./components/forms/LoginForm";

export async function loginUser(payload: LoginFormData) {
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
