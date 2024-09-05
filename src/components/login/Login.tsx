import { useState } from "react";
import LoginForm from "./LoginForm";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSumbit}>
        <LoginForm
          setPassword={setPassword}
          setEmail={setEmail}
          email={email}
          password={password}
        />
      </form>
    </div>
  );
}

export default Login;
