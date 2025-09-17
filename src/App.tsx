import React, { useState, useEffect } from 'react';
import { createClient, Session, User } from '@supabase/supabase-js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import SavingsSimulator from './SavingsSimulator';
import About from './About';
import './index.css';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState<'signIn' | 'signUp'>('signIn');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data?.session?.user ?? null));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleAuth = async () => {
    setLoading(true);
    let error;
    if (authMode === 'signIn') {
      ({ error } = await supabase.auth.signInWithPassword({ email, password }));
    } else {
      ({ error } = await supabase.auth.signUp({ email, password }));
    }
    if (error) alert(error.message);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-96">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600">SmartMoney</h1>

          <div className="flex justify-center mb-4">
            <button
              onClick={() => setAuthMode('signIn')}
              className={`px-4 py-2 rounded-tl-xl rounded-bl-xl font-semibold ${
                authMode === 'signIn' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthMode('signUp')}
              className={`px-4 py-2 rounded-tr-xl rounded-br-xl font-semibold ${
                authMode === 'signUp' ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full rounded mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-indigo-600 text-white p-3 rounded font-semibold hover:bg-indigo-700 transition-colors"
          >
            {loading
              ? authMode === 'signIn'
                ? 'Signing in...'
                : 'Signing up...'
              : authMode === 'signIn'
              ? 'Sign In'
              : 'Sign Up'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} />} />
        <Route path="/savings-simulator" element={<SavingsSimulator />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
