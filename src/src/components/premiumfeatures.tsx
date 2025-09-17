import React from "react";

export default function PremiumFeatures() {
  return (
    <div className="p-6 rounded-xl shadow bg-white">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Premium Features</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Unlimited Chamas</li>
        <li>Financial Knowledge Content</li>
        <li>Access to Paid Investment Events</li>
      </ul>
      <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Upgrade to Premium
      </button>
    </div>
  );
}
