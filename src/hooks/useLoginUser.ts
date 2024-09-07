import { loginUser } from "@/api/actions/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const useLoginUser = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { setAuth } = useAuth();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: (res) => {
			toast.success(res.statusMessage);
			setAuth(res.data);
			navigate(location.state?.from?.pathname || "/dashboard", {
				replace: true,
			});
		},
	});
};
