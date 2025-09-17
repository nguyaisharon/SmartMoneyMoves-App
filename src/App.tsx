// src/App.tsx
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SavingsSimulator from './SavingsSimulator';
import About from './About';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState<'home' | 'dashboard' | 'about'>('home');

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => setPage('home')}>
          SmartMoney
        </h1>
        <div className="flex gap-4">
          {!isLoggedIn && (
            <>
              <button
                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign In
              </button>
              <button
                className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-100 transition"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign Up
              </button>
            </>
          )}
          <button
            className="px-4 py-2 rounded text-gray-700 hover:text-blue-600 transition"
            onClick={() => setPage('about')}
          >
            About
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Home / Hero Section */}
        {page === 'home' && !isLoggedIn && (
          <div className="text-center mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Manage Your Chamas and Savings Smartly
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              SmartMoney helps you track your chamas, simulate savings growth, and explore premium financial features.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign In
              </button>
              <button
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition"
                onClick={() => setIsLoggedIn(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {isLoggedIn && page === 'home' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Dashboard />
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Savings Simulator</h3>
              <SavingsSimulator />
            </div>
          </div>
        )}

        {/* About Page */}
        {page === 'about' && <About />}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-16 p-4 text-center text-gray-500">
        &copy; 2025 SmartMoney. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
