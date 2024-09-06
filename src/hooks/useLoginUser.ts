import { loginUser } from "@/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const useLoginUser = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return useMutation({
		mutationFn: loginUser,
		onSuccess: (res) => {
			toast.success(res.statusMessage);
			navigate(location.state?.from?.pathname || "/dashboard", {
				replace: true,
			});
		},
	});
};
