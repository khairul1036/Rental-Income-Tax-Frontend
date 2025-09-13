import { useState } from 'react';
import { Link } from 'react-router';

const Settings = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWrongPassword, setIsWrongPassword] = useState(false);

  const handleSecurityAction = (action: string) => {
    setActiveModal(action);
    setIsSuccess(false);
    setIsWrongPassword(false);
  };

  const handleSubmit = () => {
    // Simulate successful action
    if (password === 'correct') {
      setIsSuccess(true);
      setTimeout(() => {
        setActiveModal(null);
        setIsSuccess(false);
        setPassword('');
        setNewPassword('');
        setNewUsername('');
        setNewEmail('');
      }, 1500);
    } else {
      setIsWrongPassword(true);
    }
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsSuccess(false);
    setIsWrongPassword(false);
    setPassword('');
    setNewPassword('');
    setNewUsername('');
    setNewEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 pb-20">
      {/* ID Number */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <p className="text-gray-800 text-sm font-mono">23333126616265665</p>
      </div>

      {/* User Information */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 text-sm">Username:</p>
            <p className="text-gray-800">username</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Name:</p>
            <p className="text-gray-800">John</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Middle name:</p>
            <p className="text-gray-800">Hailr</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Surname:</p>
            <p className="text-gray-800">DOP</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Email:</p>
            <p className="text-gray-800">jonh_doe@email.com</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Phone number:</p>
            <p className="text-gray-800">+86600358053</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Address:</p>
            <p className="text-gray-800">272, Cherrywood Street</p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
        <div className="space-y-2">
          <button
            onClick={() => handleSecurityAction('password')}
            className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200"
          >
            Change password
          </button>
          <button
            onClick={() => handleSecurityAction('username')}
            className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200"
          >
            Change username
          </button>
          <button
            onClick={() => handleSecurityAction('email')}
            className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200"
          >
            Change email
          </button>
        </div>
      </div>

      {/* Legend Section */}
      <Link to={'/'}>      
      <div className="bg-red-500 rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-lg font-semibold text-white text-center">Logout</h3>
      </div>
      </Link>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-4 w-full max-w-md">
            {isSuccess ? (
              <div className="text-center py-4">
                <p className="text-green-600 font-semibold mb-2">Success</p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  OK
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Change {activeModal}
                </h3>

                {isWrongPassword && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    <p className="font-bold">WRONG PASSWORD</p>
                    <p className="text-sm">REUSE DEFAULT PASSWORD ROUTES</p>
                  </div>
                )}

                <p className="text-gray-600 mb-4">
                  You're about to change your {activeModal}. Put your password.
                </p>

                <div className="space-y-3 mb-4">
                  <input
                    type="password"
                    placeholder="Current password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />

                  {activeModal === 'password' && (
                    <input
                      type="password"
                      placeholder="New password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}

                  {activeModal === 'username' && (
                    <input
                      type="text"
                      placeholder="New username"
                      value={newUsername}
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}

                  {activeModal === 'email' && (
                    <input
                      type="email"
                      placeholder="New email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}
                </div>

                <p className="text-blue-600 text-sm mb-4 cursor-pointer">
                  I forget my password
                </p>

                <div className="flex space-x-3">
                  <button
                    onClick={closeModal}
                    className="flex-1 py-2 bg-gray-300 text-gray-800 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-2 bg-blue-600 text-white rounded-md"
                  >
                    OK
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;