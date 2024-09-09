import { onBoardUser } from "@/api/actions/auth";
import { useMutation } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "./useToast";

export const useOnBoardUser = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { toast } = useToast();
	return useMutation({
		mutationFn: onBoardUser,
		onSuccess: (res) => {
			toast({
				description: res.statusMessage,
			});
			navigate(location.state?.from?.pathname || "/login", {
				replace: true,
			});
		},
	});
};
