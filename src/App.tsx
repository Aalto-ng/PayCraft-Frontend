import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

// Desc: Main App component for the application.
function App() {
	const location = useLocation();
	return (
		<Routes>
			<Route path="/">
				{/* redirect to dashboard if user is authenticated */}
				<Route
					path="/"
					element={
						<Navigate
							to="/dashboard"
							state={{ from: location }}
							replace
						/>
					}
				/>

				<Route
					path="login"
					element={<LoginPage />}
				/>
				<Route
					path="signup"
					element={<SignUpPage />}
				/>

				{/* we want to protect */}
				<Route element={<RequireAuth />}>
					<Route
						path="/dashboard"
						element={<>Dashboard</>}
					/>
				</Route>

				{/* 404 */}
				<Route
					path="*"
					element={<>404</>}
				/>
			</Route>
		</Routes>
	);
}

export default App;
