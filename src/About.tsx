// src/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">SmartMoney</h1>
      <p className="text-lg text-gray-700">
        App published by <span className="font-semibold text-green-600">Sharon Nguyai</span>
      </p>
      <p className="mt-2 text-gray-500">
        SmartMoney helps you manage your chamas, simulate savings, and explore premium financial features.
      </p>
    </div>
  );
};

export default About;
