// src/App.tsx
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SavingsSimulator from './SavingsSimulator';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  // Handle login or sign up
  const handleAuth = async () => {
    if (!email || !password) return alert('Enter email and password');

    if (isLogin) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return alert(error.message);
      setUser(data.user);
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return alert(error.message);
      setUser(data.user);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <header className="w-full max-w-md mb-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">SmartMoney</h1>
        {!user && (
          <p className="text-gray-600">
            Manage your chamas, simulate savings & explore premium features
          </p>
        )}
      </header>

      {!user ? (
        // Login / Sign-up For<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <input
  type="email"
  placeholder="Email"
  className="w-full p-2 mb-3 border rounded"
/>
      value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleAuth}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <p className="mt-3 text-sm text-gray-500 text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      ) : (
        // Dashboard + Features
        <div className="w-full max-w-4xl flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Welcome, {user.email}</h2>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>

          <Dashboard />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Savings Simulator</h3>
            <SavingsSimulator />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Unlimited chamas</li>
              <li>Access to financial knowledge content</li>
              <li>Paid investment events</li>
            </ul>
            <button className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
              Upgrade to Premium
            </button>
          </div>
        </div>
      )}

      <footer className="mt-10 text-gray-500 text-sm">
        App published by <strong>Sharon Nguyai</strong>
      </footer>
    </div>
  );
};

export default App;

      
