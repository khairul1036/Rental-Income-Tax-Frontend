const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* ID Number */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <p className="text-gray-800 text-sm font-mono">2333312616265665</p>
      </div>

      {/* User Information */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Username:</p>
            <p className="text-gray-800">username</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Name:</p>
            <p className="text-gray-800">John</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Audio name:</p>
            <p className="text-gray-800">Nasir</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Email:</p>
            <p className="text-gray-800">jonh.obe@email.com</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Phone number:</p>
            <p className="text-gray-800">+86000580035</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Address:</p>
            <p className="text-gray-800">274, cherrywood street</p>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Security</h3>
        <div className="space-y-3">
          <button className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200">
            Change password
          </button>
          <button className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200">
            Change username
          </button>
          <button className="w-full text-left py-2 px-3 bg-gray-100 rounded-md text-gray-800 hover:bg-gray-200">
            Change email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;