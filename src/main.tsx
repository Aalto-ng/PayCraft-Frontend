import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthProvider.tsx";

import App from "./App.tsx";
import "./index.css";
import { Toaster } from "./components/ui/toaster.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
          <Toaster />
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
