import { useState } from "react";

function D_ElectricBillCalculatorPage() {
  //input
  const [customerName, setCustomerName] = useState("");
  const [consumption, setConsumption] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    if (customerName.trim() === "" || consumption === "") {
      setError("Please enter the customer name and consumption.");
      setResult(null);
      return;
    }

    const numericConsumption = Number(consumption);

    if (numericConsumption < 0) {
      setError("Consumption cannot be negative.");
      setResult(null);
      return;
    }

    let rate;
    if (numericConsumption <= 100) {
      rate = 10;
    } else if (numericConsumption <= 200) {
      rate = 12;
    } else if (numericConsumption <= 300) {
      rate = 15;
    } else {
      rate = 18;
    }

    const totalBill = numericConsumption * rate;

    let usageStatus;

    if (totalBill >= 5000) {
      usageStatus = "High Electricity Usage";
    } else {
      usageStatus = "Normal Electricity Usage";
    }

    setResult({
      customerName,
      consumption: numericConsumption,
      rate,
      totalBill,
      usageStatus,
    });

    setError("");
  };

  const handleClear = () => {
    setCustomerName("");
    setConsumption("");
    setResult(null);
    setError("");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-slate-100 px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600">
            Activity 4
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            Electricity Bill Calculator
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Enter the customer information and electricity consumption to
            calculate the total bill.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <form onSubmit={handleCalculate} className="space-y-5">
        
            <div>
              <label
                htmlFor="customerName"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Customer Name
              </label>

              <input
                id="customerName"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label
                htmlFor="consumption"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Consumption (kWh)
              </label>

              <input
                id="consumption"
                type="number"
                min="0"
                step="any"
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                placeholder="Enter electricity consumption"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="rounded-lg bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700 active:scale-[0.99]"
              >
                Calculate Bill
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
                Billing Result
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-900">
                Electricity Bill
              </h2>
            </div>

            <div className="space-y-4">
  
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Customer Name
                </span>

                <span className="font-semibold text-slate-900">
                  {result.customerName}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Consumption
                </span>

                <span className="font-semibold text-slate-900">
                  {result.consumption} kWh
                </span>
              </div>

      
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Rate Applied
                </span>

                <span className="font-semibold text-slate-900">
                  ₱{result.rate.toFixed(2)} / kWh
                </span>
              </div>

              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-sm font-medium text-slate-500">
                  Total Bill
                </span>

                <span className="text-xl font-bold text-sky-600">
                  ₱
                  {result.totalBill.toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

        
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm font-medium text-slate-500">
                  Usage Status
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-center text-sm font-bold ${
                    result.usageStatus === "High Electricity Usage"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {result.usageStatus}
                </span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 rounded-xl bg-slate-900 p-5 text-sm text-slate-300">
          <h3 className="mb-3 font-bold text-white">
            Electricity Rate Guide
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>0 - 100 kWh</span>
              <span className="font-semibold text-white">₱10 / kWh</span>
            </div>

            <div className="flex justify-between">
              <span>101 - 200 kWh</span>
              <span className="font-semibold text-white">₱12 / kWh</span>
            </div>

            <div className="flex justify-between">
              <span>201 - 300 kWh</span>
              <span className="font-semibold text-white">₱15 / kWh</span>
            </div>

            <div className="flex justify-between">
              <span>Above 300 kWh</span>
              <span className="font-semibold text-white">₱18 / kWh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default D_ElectricBillCalculatorPage;