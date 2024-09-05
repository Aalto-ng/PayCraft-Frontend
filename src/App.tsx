import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";

// Desc: Main App component for the application.
function App() {
  return (
    <Routes>
      <Route path="/">PayCraft</Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  );
}

export default App;
