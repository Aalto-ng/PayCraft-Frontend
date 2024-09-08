import { loginUser } from "@/api/actions/auth";
import { parseToSeconds } from "@/lib/utils";
import { useAuthActions } from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "./useToast";

export const useLoginUser = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { toast } = useToast();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, setCookie] = useCookies();
	const { setAccessToken } = useAuthActions();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: (res) => {
			toast({
				description: res.statusMessage,
			});
			setAccessToken(res.data.accessToken);
			setCookie("access_token", res.data.refreshToken, {
				maxAge: parseToSeconds(res.data.expirationTime),
				sameSite: true,
			});
			navigate(location.state?.from?.pathname || "/dashboard", {
				replace: true,
			});
		},
	});
};
