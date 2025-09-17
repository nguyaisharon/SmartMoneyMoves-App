import React, { useState } from 'react';

const SavingsSimulator: React.FC = () => {
  const [monthly, setMonthly] = useState<number>(1000);
  const [years, setYears] = useState<number>(1);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateSavings = () => {
    const r = 0.14 / 12; // monthly interest
    const n = years * 12;
    const fv = monthly * ((Math.pow(1 + r, n) - 1) / r);
    setFutureValue(fv);
  };

  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-xl font-bold mb-4 text-blue-600">Savings Simulator</h3>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Monthly Contribution</label>
        <select
          value={monthly}
          onChange={(e) => setMonthly(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value={1000}>1,000</option>
          <option value={5000}>5,000</option>
          <option value={10000}>10,000</option>
          <option value={30000}>30,000</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-semibold">Number of Years</label>
        <input
          type="number"
          min={1}
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <button
        onClick={calculateSavings}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Calculate Future Value
      </button>

      {futureValue !== null && (
        <p className="mt-4 font-semibold text-green-600">
          Future Value: KSh {futureValue.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default SavingsSimulator;

