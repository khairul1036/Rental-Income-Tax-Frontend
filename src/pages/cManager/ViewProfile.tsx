const ViewProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* ID Number */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <p className="text-gray-800 text-sm font-mono">233331286162655565</p>
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
            <p className="text-gray-800">Nasir</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Surname:</p>
            <p className="text-gray-800">DOE</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Email:</p>
            <p className="text-gray-800">jonh.doe@email.com</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Phone number:</p>
            <p className="text-gray-800">+86000580035</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Address:</p>
            <p className="text-gray-800">Colonou / Benin</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Address:</p>
            <p className="text-gray-800">274, cherrywood street</p>
          </div>
        </div>
      </div>

      {/* Property 1 */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Property 1</h3>
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 text-sm">Rent cost</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Property ID</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Current status</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Month paid</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Month due</p>
          </div>
        </div>
      </div>

      {/* Property 2 */}
      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Property 2</h3>
        <div className="space-y-3">
          <div>
            <p className="text-gray-600 text-sm">Rent cost</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Property ID</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Current status</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Month paid</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Month due</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;