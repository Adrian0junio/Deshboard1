import React, { useState } from 'react';
import { UserCircle, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (username === 'adrian' && password === 'micro-saas0.1') {
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gray-700/50 flex items-center justify-center backdrop-blur-sm border border-gray-700">
            <UserCircle className="w-16 h-16 text-gray-400" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-11 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                placeholder="Username"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg py-3 px-11 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-gray-600 focus:ring-gray-500 bg-gray-700"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <button type="button" className="text-sm text-gray-400 hover:text-gray-300">
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 uppercase tracking-wider"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;