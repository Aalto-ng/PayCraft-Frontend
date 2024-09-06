import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./context/AuthProvider.tsx";
import "./index.css";
import ReactQueryClientProvider from "./providers/ReactQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ReactQueryClientProvider>
			<AuthProvider>
				<Router>
					<App />
				</Router>
				<Toaster />
			</AuthProvider>
		</ReactQueryClientProvider>
	</StrictMode>
);
