const SignIn = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <form className="mt-4">
          <input type="email" placeholder="Email" className="block p-2 border rounded mb-2" />
          <input type="password" placeholder="Password" className="block p-2 border rounded mb-2" />
          <button className="px-6 py-2 bg-green-500 text-white rounded-lg">Login</button>
        </form>
      </div>
    );
  };
  
  export default SignIn;
  