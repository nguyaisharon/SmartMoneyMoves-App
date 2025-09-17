import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SavingsSimulator from './SavingsSimulator';
import PremiumFeatures from './components/PremiumFeatures';

const App: React.FC = () => {
  const [user, setUser] = useState<string | null>(null); // Logged-in username
  const [page, setPage] = useState<'login' | 'dashboard'>('login');
  const [plan, setPlan] = useState<'free' | 'premium'>('free');

  const handleLogin = (username: string) => {
    setUser(username);
    setPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      {page === 'login' && (
        <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1556740763-2e6a68aa7f42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
          <div className="bg-white bg-opacity-90 p-8 rounded shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-6 text-blue-600 text-center">SmartMoney</h1>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setUser(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={() => user && handleLogin(user)}
            >
              Sign In
            </button>
            <p className="mt-4 text-center text-gray-600">
              Free plan active. Upgrade for premium features.
            </p>
          </div>
        </div>
      )}

      {page === 'dashboard' && user && (
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600">Welcome, {user}</h2>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Dashboard />
            </div>
            <div>
              <SavingsSimulator />
            </div>
          </div>

          <div className="mt-8">
            {plan === 'free' && <PremiumFeatures />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

