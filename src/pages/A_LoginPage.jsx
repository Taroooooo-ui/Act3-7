import { useState } from "react";

function A_LoginPage() {
  //form
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //login credentials
  const correctUsername = "admin";
  const correctPassword = "admin123";

  const handleLogin = (e) => {
    e.preventDefault();

    let hasError = false;

    setUsernameError("");
    setPasswordError("");
    setMessage("");

    if (username.trim() === "") {
      setUsernameError("Please enter your username.");
      hasError = true;
    } else if (username !== correctUsername) {
      setUsernameError("Incorrect username.");
      hasError = true;
    }

    if (password.trim() === "") {
      setPasswordError("Please enter your password.");
      hasError = true;
    } else if (password !== correctPassword) {
      setPasswordError("Incorrect password.");
      hasError = true;
    }

    if (hasError) {
      setIsLoggedIn(false);
      return;
    }

    setMessage("Login successful!");
    setIsLoggedIn(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);

    if (usernameError) {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    if (passwordError) {
      setPasswordError("");
    }
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setMessage("");
    setUsernameError("");
    setPasswordError("");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Page Header */}
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Activity 1
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Login Authentication
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Enter your username and password to continue.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Username
                </label>

                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter username"
                  className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    usernameError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-sky-500 focus:ring-sky-200"
                  }`}
                />

                {usernameError && (
                  <p className="mt-2 text-sm font-medium text-red-600">
                    {usernameError}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password"
                  className={`w-full rounded-lg border px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                    passwordError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
                      : "border-slate-300 focus:border-sky-500 focus:ring-sky-200"
                  }`}
                />

                {passwordError && (
                  <p className="mt-2 text-sm font-medium text-red-600">
                    {passwordError}
                  </p>
                )}
              </div>

      
              <button
                type="submit"
                className="w-full rounded-lg bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Login
              </button>

            </form>
          ) : (
           
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
                ✓
              </div>

              <h2 className="text-2xl font-bold text-slate-900">
                Welcome, {username}!
              </h2>

      
              <p className="mt-2 text-sm font-medium text-green-600">
                {message}
              </p>

              <button
                type="button"
                onClick={handleLogout}
                className="mt-6 w-full rounded-lg bg-slate-800 px-4 py-3 font-semibold text-white transition hover:bg-slate-900 active:scale-[0.99]"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="mt-5 rounded-lg bg-sky-50 p-4 text-center text-sm text-slate-600 ring-1 ring-sky-100">
          <p className="font-semibold text-slate-700">
            Demo Credentials
          </p>

          <p className="mt-1">
            Username:{" "}
            <span className="font-semibold text-slate-900">
              admin
            </span>
          </p>

          <p>
            Password:{" "}
            <span className="font-semibold text-slate-900">
              admin123
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default A_LoginPage;