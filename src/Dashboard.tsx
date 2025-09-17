import React from 'react';
import { Link } from 'react-router-dom';

type DashboardProps = {
  user: any;
  onLogout: () => void;
};

function Dashboard({ user, onLogout }: DashboardProps) {
  const totalChamas = 5;
  const totalMembers = 42;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-600">SmartMoney Dashboard</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-gray-500 font-semibold mb-2">Total Chamas</p>
          <p className="text-2xl font-bold">{totalChamas}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-gray-500 font-semibold mb-2">Total Members</p>
          <p className="text-2xl font-bold">{totalMembers}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-gray-500 font-semibold mb-2">Premium Features</p>
          <p className="text-2xl font-bold">Available</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/savings-simulator"
          className="flex-1 bg-indigo-600 text-white py-3 rounded font-semibold text-center hover:bg-indigo-700 transition-colors"
        >
          Savings Simulator
        </Link>
        <button className="flex-1 bg-green-500 text-white py-3 rounded font-semibold hover:bg-green-600 transition-colors">
          View Chamas
        </button>
        <button className="flex-1 bg-yellow-500 text-white py-3 rounded font-semibold hover:bg-yellow-600 transition-colors">
          Upgrade to Premium
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
