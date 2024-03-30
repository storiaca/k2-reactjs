import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSumbit(e) {
    e.preventDefault();
    // 1. cuvaj podatke
    localStorage.setItem("vite_user", JSON.stringify({ email, password }));

    setEmail("");
    setPassword("");

    // 2. redirect na Home
    setTimeout(() => {
      toast.success("Uspesno logovanje");
      navigate("/");
    }, 2000);
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center">Login</h2>

      <form onSubmit={handleSumbit} className="w-[300px] mx-auto py-7">
        <label className="block mb-4" htmlFor="email">
          <input
            className="p-2 border w-full border-gray-800 focus:border-blue-800"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onInput={handleInput}
          />
        </label>
        <label className="block my-4" htmlFor="pasword">
          <input
            className="p-2 border w-full border-gray-800 focus:border-blue-800"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onInput={handleInput}
          />
        </label>
        <button
          type="submit"
          className="block w-full p-2 bg-blue-400 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
