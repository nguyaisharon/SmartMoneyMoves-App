import React from 'react';

const PremiumFeatures: React.FC = () => {
  return (
    <div className="bg-white rounded shadow p-6 mt-6">
      <h3 className="text-xl font-bold mb-4 text-blue-600">Premium Features</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Unlimited Chamas</li>
        <li>Financial Knowledge Content</li>
        <li>Access to Paid Investment Events</li>
      </ul>
      <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
        Upgrade to Premium
      </button>
    </div>
  );
};

export default PremiumFeatures;

