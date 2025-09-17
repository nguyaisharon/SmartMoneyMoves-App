// src/SavingsSimulator.tsx
import React, { useState } from 'react';

const SavingsSimulator: React.FC = () => {
  const [monthly, setMonthly] = useState(1000);
  const [years, setYears] = useState(1);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateFV = () => {
    const rate = 0.14; // 14% annual rate
    const months = years * 12;
    let fv = 0;

    for (let i = 1; i <= months; i++) {
      fv = (fv + monthly) * (1 + rate / 12);
    }

    setFutureValue(fv);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <label className="font-medium">Monthly Contribution:</label>
        <select
          className="border p-2 rounded"
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
        >
          <option value={1000}>1,000</option>
          <option value={5000}>5,000</option>
          <option value={10000}>10,000</option>
          <option value={30000}>30,000</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <label className="font-medium">Number of Years:</label>
        <input
          type="number"
          min={1}
          max={50}
          className="border p-2 rounded w-24"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>

      <button
        onClick={calculateFV}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Calculate Future Value
      </button>

      {futureValue !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded shadow">
          <p className="font-semibold">
            Estimated Savings after {years} year(s):
          </p>
          <p className="text-green-600 text-lg font-bold">
            KSh {futureValue.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default SavingsSimulator;
