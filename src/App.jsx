import { useState } from "react";

import NavBar from "./components/Navbar";

import A_LoginPage from "./pages/A_LoginPage";
import B_GradeEvaluationPage from "./pages/B_GradeEvaluationPage";
import C_PasswordChecker from "./pages/C_PasswordChecker";
import D_ElectricBillCalculatorPage from "./pages/D_ElectricBillCalculatorPage";
import E_EmployeeAttendanceCheckerPage from "./pages/E_EmployeeAttendanceCheckerPage";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavigation = (page) => {
    setActivePage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderPage = () => {
    if (activePage === "activity1") {
      return <A_LoginPage />;
    } else if (activePage === "activity2") {
      return <B_GradeEvaluationPage />;
    } else if (activePage === "activity3") {
      return <C_PasswordChecker />;
    } else if (activePage === "activity4") {
      return <D_ElectricBillCalculatorPage />;
    } else if (activePage === "activity5") {
      return <E_EmployeeAttendanceCheckerPage />;
    } else {
      return (
        <div className="min-h-screen bg-[#F1F6FB] px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-[1700px]">
            <div className="mb-16 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl lg:text-6xl">
                React Activity Portal
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-500 sm:text-xl">
                Five interactive React activities demonstrating state, events,
                conditional logic, validation, and calculations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            
              <div className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E3E7FF] text-xl font-bold text-[#4D38FF]">
                  1
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Login Authentication
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Validate a username and password against sample credentials
                  and manage login/logout state.
                </p>

                <button
                  type="button"
                  onClick={() => handleNavigation("activity1")}
                  className="mt-auto w-full rounded-xl bg-[#4D38FF] px-6 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#3F2BEA] hover:shadow-md active:scale-[0.99]"
                >
                  Open Activity
                </button>
              </div>

              <div className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E3E7FF] text-xl font-bold text-[#4D38FF]">
                  2
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Student Grade Evaluation
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Enter a student's score and get an automatic remark based on
                  grade ranges.
                </p>

                <button
                  type="button"
                  onClick={() => handleNavigation("activity2")}
                  className="mt-auto w-full rounded-xl bg-[#4D38FF] px-6 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#3F2BEA] hover:shadow-md active:scale-[0.99]"
                >
                  Open Activity
                </button>
              </div>

              <div className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E3E7FF] text-xl font-bold text-[#4D38FF]">
                  3
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Password Strength Checker
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Check password length and receive live feedback on how strong
                  it is.
                </p>

                <button
                  type="button"
                  onClick={() => handleNavigation("activity3")}
                  className="mt-auto w-full rounded-xl bg-[#4D38FF] px-6 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#3F2BEA] hover:shadow-md active:scale-[0.99]"
                >
                  Open Activity
                </button>
              </div>

            
              <div className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E3E7FF] text-xl font-bold text-[#4D38FF]">
                  4
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Electricity Bill Calculator
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Calculate a customer's electricity bill based on kWh
                  consumption and tiered rates.
                </p>

                <button
                  type="button"
                  onClick={() => handleNavigation("activity4")}
                  className="mt-auto w-full rounded-xl bg-[#4D38FF] px-6 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#3F2BEA] hover:shadow-md active:scale-[0.99]"
                >
                  Open Activity
                </button>
              </div>

            
              <div className="flex min-h-[340px] flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#E3E7FF] text-xl font-bold text-[#4D38FF]">
                  5
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  Employee Attendance Checker
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  Check an employee's time-in and determine whether they are on
                  time, late, or very late.
                </p>

                <button
                  type="button"
                  onClick={() => handleNavigation("activity5")}
                  className="mt-auto w-full rounded-xl bg-[#4D38FF] px-6 py-4 text-lg font-bold text-white shadow-sm transition hover:bg-[#3F2BEA] hover:shadow-md active:scale-[0.99]"
                >
                  Open Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F6FB]">
      <NavBar
        activePage={activePage}
        onNavigate={handleNavigation}
      />

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;