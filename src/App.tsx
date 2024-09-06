import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import RequireAuth from "./components/RequireAuth";
import { useLocation } from "react-router-dom";

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
            <Navigate to="/dashboard" state={{ from: location }} replace />
          }
        />
        <Route path="login" element={<Login />} />

        {/* we want to protect */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<>Dashboard</>} />
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<>404</>} />
      </Route>
    </Routes>
  );
}

export default App;
