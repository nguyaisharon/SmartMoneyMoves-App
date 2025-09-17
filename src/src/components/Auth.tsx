import Auth from './components/Auth';

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side with branding and value proposition */}
      <div className="hidden lg:flex flex-col justify-center items-center w-full lg:w-1/2 p-12 bg-green-50 text-green-900">
        <h1 className="text-5xl font-extrabold tracking-tight text-center">
          <span className="block">Manage Your Chamas</span>
          <span className="block text-green-600">Smartly</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-center">
          Create, manage, and grow your investment groups with powerful tools designed for modern chama management.
        </p>
        <ul className="mt-8 space-y-4 text-lg text-left">
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-3">Group Management</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-3">Smart Analytics</span>
          </li>
        </ul>
      </div>

      {/* Right side with the authentication form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <Auth />
      </div>
    </div>
  );
};

export default App;
