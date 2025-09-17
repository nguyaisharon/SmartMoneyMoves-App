import React from 'react';

const Dashboard: React.FC = () => {
  // Dummy data for now
  const chamas = [
    { name: 'Investment Chama', members: 10 },
    { name: 'Savings Chama', members: 8 },
  ];

  const totalMembers = chamas.reduce((acc, c) => acc + c.members, 0);

  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-xl font-bold mb-4 text-blue-600">Your Chamas</h3>
      <ul className="mb-4">
        {chamas.map((chama, index) => (
          <li key={index} className="flex justify-between border-b py-2">
            <span>{chama.name}</span>
            <span>{chama.members} members</span>
          </li>
        ))}
      </ul>
      <div className="text-gray-700 font-semibold">
        Total Chamas: {chamas.length} | Total Members: {totalMembers}
      </div>
    </div>
  );
};

export default Dashboard;

