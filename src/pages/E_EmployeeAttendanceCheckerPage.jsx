import { useState } from "react";

function E_EmployeeAttendanceCheckerPage() {
  //input
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckAttendance = (e) => {
    e.preventDefault();

    if (employeeName.trim() === "" || timeIn === "") {
      setError("Please enter the employee name and time in.");
      setResult(null);
      return;
    }

    const numericTime = Number(timeIn);

    if (Number.isNaN(numericTime) || numericTime < 0) {
      setError("Please enter a valid time.");
      setResult(null);
      return;
    }

    let attendanceStatus;
    let followUpMessage;

    if (numericTime <= 7) {
      attendanceStatus = "On Time";
      followUpMessage = "Status: On Time – Good job!";
    } else if (numericTime > 8 && numericTime <= 8) {
      attendanceStatus = "Late";
      followUpMessage =
        "Status: Late – Please be on time tomorrow.";
    } else if (numericTime > 8) {
      attendanceStatus = "Very Late";
      followUpMessage =
        "Status: Very Late – Report to your supervisor.";
    } else {
      attendanceStatus = "Undefined";
      followUpMessage =
        "No attendance status is defined for this time in the provided activity rules.";
    }

    setResult({
      employeeName,
      timeIn: numericTime,
      attendanceStatus,
      followUpMessage,
    });

    setError("");
  };


  const handleReset = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  
  const getStatusStyle = () => {
    if (!result) {
      return "";
    }

    if (result.attendanceStatus === "On Time") {
      return "bg-green-100 text-green-700";
    } else if (result.attendanceStatus === "Late") {
      return "bg-yellow-100 text-yellow-700";
    } else if (result.attendanceStatus === "Very Late") {
      return "bg-red-100 text-red-700";
    } else {
      return "bg-slate-100 text-slate-700";
    }
  };


  const getMessageStyle = () => {
    if (!result) {
      return "";
    }

    if (result.attendanceStatus === "On Time") {
      return "bg-green-50 text-green-700 ring-green-200";
    } else if (result.attendanceStatus === "Late") {
      return "bg-yellow-50 text-yellow-700 ring-yellow-200";
    } else if (result.attendanceStatus === "Very Late") {
      return "bg-red-50 text-red-700 ring-red-200";
    } else {
      return "bg-slate-50 text-slate-700 ring-slate-200";
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Activity 5
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Employee Attendance Checker
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Enter the employee's name and time in to check their
            attendance status.
          </p>
        </div>

    
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <form onSubmit={handleCheckAttendance} className="space-y-5">
            <div>
              <label
                htmlFor="employeeName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Employee Name
              </label>

              <input
                id="employeeName"
                type="text"
                value={employeeName}
                onChange={(e) => setEmployeeName(e.target.value)}
                placeholder="Enter employee name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label
                htmlFor="timeIn"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Time In
              </label>

              <input
                id="timeIn"
                type="number"
                min="0"
                step="0.01"
                value={timeIn}
                onChange={(e) => setTimeIn(e.target.value)}
                placeholder="Example: 8.5 = 8:30 AM"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />

              <p className="mt-2 text-xs text-slate-500">
                Use decimal time. Example: 8.5 represents 8:30 AM.
              </p>
            </div>

          
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="rounded-lg bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Check Attendance
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg bg-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-300 active:scale-[0.99]"
              >
                Reset
              </button>
            </div>

           
            {error && (
              <div className="rounded-lg bg-red-50 p-4 text-center text-sm font-medium text-red-600 ring-1 ring-red-200">
                {error}
              </div>
            )}
          </form>
        </div>

     
        {result && (
          <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <div className="mb-5 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
                Attendance Result
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Employee Attendance
              </h2>
            </div>

            <div className="space-y-4">
             
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Employee Name
                </span>

                <span className="font-semibold text-slate-900">
                  {result.employeeName}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Time In
                </span>

                <span className="font-semibold text-slate-900">
                  {result.timeIn}
                </span>
              </div>

              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Attendance Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${getStatusStyle()}`}
                >
                  {result.attendanceStatus}
                </span>
              </div>
            </div>

        
            <div
              className={`mt-5 rounded-lg p-4 text-center text-sm font-semibold ring-1 ${getMessageStyle()}`}
            >
              {result.followUpMessage}
            </div>
          </div>
        )}

      
        <div className="mt-6 rounded-xl bg-slate-900 p-5 text-sm text-slate-300">
          <h3 className="mb-3 font-bold text-white">
            Attendance Guide
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between gap-4">
              <span>Time In ≤ 7</span>
              <span className="font-semibold text-green-400">
                On Time
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span>8 &lt; Time In ≤ 8</span>
              <span className="font-semibold text-yellow-400">
                Late
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span>Time In &gt; 8</span>
              <span className="font-semibold text-red-400">
                Very Late
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default E_EmployeeAttendanceCheckerPage;