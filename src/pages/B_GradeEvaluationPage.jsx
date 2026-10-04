import { useState } from "react";

function B_GradeEvaluationPage() {
  //input
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");
  //res
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  // Evaluate student grade
  const handleEvaluate = (e) => {
    e.preventDefault();

    if (studentName.trim() === "" || score === "") {
      setError("Please enter the student name and score.");
      setResult(null);
      return;
    }
    const numericScore = Number(score);

    if (numericScore < 0 || numericScore > 100) {
      setError("Invalid score");
      setResult(null);
      return;
    }

    let remarks;

    //grade conditions
    if (numericScore >= 90 && numericScore <= 100) {
      remarks = "Excellent";
    } else if (numericScore >= 85 && numericScore <= 89) {
      remarks = "Very Good";
    } else if (numericScore >= 80 && numericScore <= 84) {
      remarks = "Good";
    } else if (numericScore >= 75 && numericScore <= 79) {
      remarks = "Passed";
    } else {
      remarks = "Failed";
    }

    setResult({
      name: studentName,
      score: numericScore,
      remarks: remarks,
    });

    setError("");
  };


  const handleClear = () => {
    setStudentName("");
    setScore("");
    setResult(null);
    setError("");
  };


  const getRemarkStyle = () => {
    if (!result) {
      return "";
    }

    if (result.remarks === "Excellent") {
      return "bg-green-100 text-green-700";
    } else if (result.remarks === "Very Good") {
      return "bg-emerald-100 text-emerald-700";
    } else if (result.remarks === "Good") {
      return "bg-blue-100 text-blue-700";
    } else if (result.remarks === "Passed") {
      return "bg-yellow-100 text-yellow-700";
    } else {
      return "bg-red-100 text-red-700";
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Activity 2
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Student Grade Evaluation
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Enter the student's information to evaluate their grade.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <form onSubmit={handleEvaluate} className="space-y-5">
            <div>
              <label
                htmlFor="studentName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Student Name
              </label>

              <input
                id="studentName"
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label
                htmlFor="score"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Score
              </label>

              <input
                id="score"
                type="number"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score from 0 to 100"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="rounded-lg bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Evaluate
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
                Evaluation Result
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Student Grade
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Student Name
                </span>

                <span className="font-semibold text-slate-900">
                  {result.name}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Score
                </span>

                <span className="font-semibold text-slate-900">
                  {result.score}
                </span>
              </div>


              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Remarks
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-sm font-bold ${getRemarkStyle()}`}
                >
                  {result.remarks}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-xl bg-slate-900 p-5 text-sm text-slate-300">
          <h3 className="mb-3 font-bold text-white">Grade Guide</h3>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>90 - 100</span>
              <span className="font-semibold text-white">Excellent</span>
            </div>

            <div className="flex justify-between">
              <span>85 - 89</span>
              <span className="font-semibold text-white">Very Good</span>
            </div>

            <div className="flex justify-between">
              <span>80 - 84</span>
              <span className="font-semibold text-white">Good</span>
            </div>

            <div className="flex justify-between">
              <span>75 - 79</span>
              <span className="font-semibold text-white">Passed</span>
            </div>

            <div className="flex justify-between">
              <span>Below 75</span>
              <span className="font-semibold text-white">Failed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default B_GradeEvaluationPage;