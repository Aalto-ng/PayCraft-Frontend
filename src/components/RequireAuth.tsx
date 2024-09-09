import { useAuth } from "@/store/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
	const location = useLocation();
	const auth = useAuth();

	return auth ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ from: location }}
			replace
		/>
	);
};

export default RequireAuth;
