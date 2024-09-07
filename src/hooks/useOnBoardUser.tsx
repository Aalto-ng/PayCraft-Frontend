import { onBoardUser } from "@/api/actions/auth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

export const useOnBoardUser = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return useMutation({
		mutationFn: onBoardUser,
		onSuccess: (res) => {
			toast.success(res.statusMessage);
			navigate(location.state?.from?.pathname || "/login", {
				replace: true,
			});
		},
	});
};
