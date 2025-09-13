import { Link } from "react-router";

const Owners = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Top Section */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="text-2xl font-bold text-gray-800">07</span>
                        <span className="text-gray-700 ml-2">7000xw</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Pay manager
                    </button>
                </div>

                {/* Owner List */}
                <div className="space-y-2">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-gray-800">owner_username</span>
                            <span className="text-green-600 font-medium">Paid</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-gray-800">12</span>
                <span className="text-gray-700">Appset 2025</span>
            </div>

            {/* Paid/Unpaid Tabs */}
            <div className="flex space-x-4 mb-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium">Paid</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium">Unpaid</button>
            </div>

            {/* Owner List with Request */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-800">owner_username</span>
                        <button className="text-blue-600 font-medium">Request</button>
                    </div>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-gray-800">owner_username</span>
                            <span className="text-green-600 font-medium">Paid</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex justify-between items-center bg-white rounded-lg p-3 shadow-sm">
                        <span className="text-gray-800">owner_username</span>
                        <div className="flex space-x-2">
                            <Link to={'/dashboard/owners/view-profile'}><button className="text-blue-600 text-sm font-medium">VIEW</button></Link>
                            <button className="text-red-600 text-sm font-medium">Delete</button>
                            <button className="text-green-600 text-sm font-medium">Request</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-2xl font-bold text-gray-800">05</span>
                        <span className="text-gray-700 ml-2">8000xw</span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Request all
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Owners;