import { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    
    console.log("Logging in with:", email, password);
    setError(""); // Clear error after successful input
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign In</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-3 rounded hover:bg-red-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-4">
          New to Netflix? <a href="/signup" className="text-red-500">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
