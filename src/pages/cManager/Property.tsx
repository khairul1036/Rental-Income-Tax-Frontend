import { Link } from "react-router";

const Property = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Prices right</h1>
                        <p className="text-3xl font-bold text-green-600">05</p>
                    </div>
                    <div className="text-right">
                        <h1 className="text-2xl font-bold text-gray-800">Price wrong</h1>
                        <p className="text-3xl font-bold text-red-600">02</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700 font-semibold">ID: <span className="font-normal">0112859320</span></p>
                </div>
            </div>

            <div className="h-px bg-gray-300 my-4"></div>

            {/* First Property */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Rent cost</h2>
                <p className="text-gray-700 mb-4">7000 xor</p>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Payment date</h2>
                <p className="text-gray-700 mb-4">05th / month</p>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Tenant ID</h2>
                <p className="text-gray-700 mb-4">11xx09811</p>

                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Current status</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Paid</span>
                    </div>
                    <button className="text-blue-600 font-medium">History</button>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Benin Republic</h2>
                <p className="text-gray-700 mb-1">Litoral</p>
                <p className="text-gray-700 mb-1">Cotonou</p>
                <p className="text-gray-700">Sainte RITA, Maison X, 274 CC</p>
            </div>

            <div className="h-px bg-gray-300 my-4"></div>

            {/* Second Property */}
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Rent cost</h2>
                <p className="text-gray-700 mb-4">1000 $or</p>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Payment date</h2>
                <p className="text-gray-700 mb-4">05th / month</p>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Tenant ID</h2>
                <p className="text-gray-700 mb-4">11xx08211</p>

                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Current status</h2>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Paid</span>
                    </div>
                    <button className="text-blue-600 font-medium">History</button>
                </div>

                <h2 className="text-lg font-semibold text-gray-800 mb-3">Benin Republic</h2>
                <p className="text-gray-700 mb-1">Litoral</p>
                <p className="text-gray-700 mb-1">Porto-novo</p>
                <p className="text-gray-700">Sainte RITA, Maison X, 274 CC</p>
            </div>

            <div className="h-px bg-gray-300 my-4"></div>

            {/* View Button */}
            <div className="mb-6">
                <Link to={'/dashboard/view-property'}>                
                    <button className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold text-sm">
                        View
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Property;