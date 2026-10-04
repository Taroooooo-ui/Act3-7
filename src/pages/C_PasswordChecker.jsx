import { useState } from "react";

function C_PasswordChecker() {
  //input
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCheckPassword = () => {
   
    if (password === "") {
      setError("Please enter a password.");
      setStrength("");
      setStatusMessage("");
      setShowResult(false);
      return;
    }
    if (password.length < 6) {
      setStrength("Weak Password");
      setStatusMessage(
        "Status: Weak – Create a stronger password."
      );
    } else if (password.length >= 6 && password.length <= 9) {
      setStrength("Medium Password");
      setStatusMessage(
        "Status: Weak – Create a stronger password."
      );
    } else {
      setStrength("Strong Password");
      setStatusMessage(
        "Status: Strong – You can use this password."
      );
    }

    setError("");
    setShowResult(true);
  };

  const handleClear = () => {
    setPassword("");
    setStrength("");
    setStatusMessage("");
    setError("");
    setShowResult(false);
  };

  const getStrengthWidth = () => {
    if (strength === "Weak Password") {
      return "w-1/3";
    } else if (strength === "Medium Password") {
      return "w-2/3";
    } else if (strength === "Strong Password") {
      return "w-full";
    } else {
      return "w-0";
    }
  };


  const getStrengthColor = () => {
    if (strength === "Weak Password") {
      return "bg-red-500";
    } else if (strength === "Medium Password") {
      return "bg-yellow-500";
    } else if (strength === "Strong Password") {
      return "bg-green-500";
    } else {
      return "bg-slate-300";
    }
  };

  const getStrengthTextColor = () => {
    if (strength === "Weak Password") {
      return "text-red-600";
    } else if (strength === "Medium Password") {
      return "text-yellow-600";
    } else if (strength === "Strong Password") {
      return "text-green-600";
    } else {
      return "text-slate-600";
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Activity 3
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Password Strength Checker
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Enter a password to check its strength based on
            length.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
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
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
     
            <p className="mt-2 text-right text-xs text-slate-500">
              {password.length} character
              {password.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleCheckPassword}
              className="rounded-lg bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-[0.99]"
            >
              Check Password
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="rounded-lg bg-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-300 active:scale-[0.99]"
            >
              Clear
            </button>
          </div>

          {error && (
            <div className="mt-5 rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600 ring-1 ring-red-200">
              {error}
            </div>
          )}
        </div>

        {showResult && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="mb-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Password Result
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Password Strength
              </h2>
            </div>

  
            <div className="mb-5 text-center">
              <p className="text-sm font-medium text-slate-500">
                Password Status
              </p>

              <p
                className={`mt-1 text-2xl font-bold ${getStrengthTextColor()}`}
              >
                {strength}
              </p>
            </div>
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-600">
                  Strength
                </span>

                <span className="text-sm font-medium text-slate-500">
                  {password.length} characters
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getStrengthWidth()} ${getStrengthColor()}`}
                ></div>
              </div>

              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>Weak</span>
                <span>Medium</span>
                <span>Strong</span>
              </div>
            </div>

            <div
              className={`rounded-lg p-4 text-center text-sm font-semibold ${
                strength === "Strong Password"
                  ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                  : "bg-red-50 text-red-700 ring-1 ring-red-200"
              }`}
            >
              {statusMessage}
            </div>
          </div>
        )}

      
        <div className="mt-6 rounded-xl bg-slate-900 p-5 text-sm text-slate-300">
          <h3 className="mb-3 font-bold text-white">
            Password Strength Guide
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Less than 6 characters</span>
              <span className="font-semibold text-red-400">
                Weak
              </span>
            </div>

            <div className="flex justify-between">
              <span>6 - 9 characters</span>
              <span className="font-semibold text-yellow-400">
                Medium
              </span>
            </div>

            <div className="flex justify-between">
              <span>10 or more characters</span>
              <span className="font-semibold text-green-400">
                Strong
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default C_PasswordChecker;