import React from 'react';

type DashboardProps = {
  user: any;
  onLogout: () => void;
};

function Dashboard({ user, onLogout }: DashboardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}</h1>
      <p>Your dashboard will go here.</p>
      <button onClick={onLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
